// ## 1. 매개변수로 두 숫자를 전달받아 합을 반환하는 함수를 작성하기
// (디폴트 매개변수 1개 사용 기본값 10)

// ### 일반함수 사용, addNumbers
function addNumbers(num1, num2 = 10) {
  return num1 + num2;
}


// ## 2. 숫자의 제곱을 계산하는 함수 작성하기

// ### 익명함수 사용, square
const square1 = (num1) => num1 * num1;

// ## 3. 가변매개변수를 사용하여 전달받은 모든 숫자의 합 계산하기

// ### sumAll1 일반함수
function sumAll1(...num){
  for(let i=1; i<num.length; i++){
    num[0] += num[i];
  }
  console.log(num[0]);
}

sumAll1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// sumAll2 익명함수
const sumAll2 = (...num) => {
  for(let i=1; i<num.length; i++){
    num[0] += num[i];
  }

  return num[0];
}

// ## 4. 콜백함수를 매개변수로 받아 두 숫자를 전달하고 연산결과(사칙연산 모두) 출력하는 oper 만들기
function oper(num1, num2, callback){
  if(callback){
    callback(num1 + num2);
    callback(num1 - num2);
    callback(num1 * num2);
    callback(num1 / num2);
  }
}

oper(4, 2, function (result){
  console.log(result);
});

// ## 5. 사용자 데이터를 배열로 받아 20살 이상인 사용자만 필터링 하는 newUser 함수 만들기
let arr1 = [["길진수", 27], ["짱구", 5], ["유리", 20]];

function newUser1(arr) {
  let count = 0;
  let filter = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i][1] >= 20){
      filter[count] = arr[i];
      count++;
    }
  }
  return filter;
}

console.log(newUser1(arr1));

// ### newUser함수는 두개의 매개변수를 받는다
// users : 사용자 이름 배열(ex : [ { name: '짱구', age: 25 }, { name: '철수', age: 18 }, { name: '훈이', age: 30 } ])
// callback : 데이터를 처리할 함수
let arr2 = [ { name: '짱구', age: 25 }, { name: '철수', age: 18 }, { name: '훈이', age: 30 } ]

function newUser2(arr, callback){
  let count = 0;
  let filter = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i].age >= 20){
      filter[count] = arr[i];
      count++;
    }
  }
  callback(filter);
}

const getResult = (result) => console.log(result);

newUser2(arr2, getResult);

// ### 6. 비동기 작업 체인

// ### 세 가지 작업을 수행하는 step1, step2, step3가 있습니다. 각 함수는 1초 후에 실행하고 runStep 함수에서 각 단계가 완료되면 다음단계로 넘어가고 마지막에는 모든 함수 호출 완료를 출력한다

function setp1(callback){
  setTimeout(() => {
    console.log("step1 실행");
    callback();
  }, 1000);
}

function setp2(callback){
  setTimeout(() => {
    console.log("step2 실행");
    callback();
  }, 1000);
}

function setp3(callback){
  setTimeout(() => {
    console.log("step3 실행");
    callback();
  }, 1000);
}

function runStep(){
  console.log('**start**');
  setp1(() => {
    setp2(() => {
      setp3(() => {
        console.log('모든 함수 출력 완료');
      });
    });
  });
}

runStep();