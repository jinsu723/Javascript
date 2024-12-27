// 15번 : 콜백함수
// 함수와 매개변수로 전달되어 특정 이벤트가 발생하거나 다른 함수가 호출될 떄 실행되는 함수

// 콜백함수에 익명함수 정의
function userInput(name, callback) {
  console.log("userInpuut");
  callback(name);
  console.log("after callback");
}

userInput("길진수", function (name) {
  console.log('익명함수 호출중...');
  for (let i = 0; i < 5; i++) {
    console.log(name);
  }
  console.log('익명함수 반복문 끝');
});

// 두 정수의 덧셈 결과를 출력
function add(num1, num2, callback){
  if(callback){
    callback(num1 + num2);
  }
  return num1 + num2;
}

const print = function (result){
  console.log(`print 익명함수 : ${result}`);
};

const result = add(10, 5, print);
// print 함수는 콜백 함수로 사용된다
// 단순히 값을 받아서 console.log를 이용해 출력하는 역할을 한다
// 콜백 함수로 전달 될 때 함수 이름만 전달하는데 add함수는 전달된 print함수를 호출하는 시점에서
// print(result)와 같이 호출하게 된다

// 함수를 즉시 호출하는 경우 함수를 즉시 실행시키고 반환값을 전달하는 것이다
// print 함수는 반환값이 없으므로 맞지 않다