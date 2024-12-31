// 11번 : 일반 함수

// 매개변수o, 리턴값o 함수 정의
function getAge(age, num){
  console.log(age, typeof age);
  console.log(num, typeof num);
  return age + num;
}

// 매개변수 o, 리턴값 o 함수호출 => 출력(식별자(인수1, 인수2)); or 변수명 = 식별자(인수1, 인수2);

console.log(getAge(20, 1));
let result = getAge(25, 1);
console.log(result);

// 디폴트 매개변수
function getAge1(name, age, num=1){
  console.log(name, typeof name);
  console.log(age, typeof age);
  console.log(num, typeof num);
  return age + num;
}

let result2 = getAge1("짱구", 5, "안녕");
console.log('디폴트 매개변수 : ' + result2);

// 아이디, 비밀번호, 이름을 전달받고 이름의 기본값을 사용자로 설정하기
// 함수명 : introduce 매개변수o, 리턴값x
function introduce(id, password, name="사용자"){
  console.log(id, typeof id);
  console.log(password, typeof password);
  console.log(name, typeof name);
}

introduce(1, 123, "길진수");
introduce(2, 456);

// introduce.password = 0123;
// 01234로 인수를 전달하면 8진수로 해석되어 계산한다
// 83으로 나온다

// 가변 매개변수 : 함수 호출 시 몇 개의 값이 전달될지 모를 때 사용한다
function printAdd(...numbers){
  // console.log(numbers, typeof numbers);
  // for(let i=0; i<numbers.length; i++){
  //   console.log(numbers[i]);
  // }

  // 자바 for(자료형 변수명 : 배열명), 스트림 foreach
// 자바스크립트 for(let 변수명 in 배열명){}
  // for(let i in numbers){
  //   console.log(i);
  // }
}



printAdd(1, 2, 3, "a");  // [ 1, 2, 3, 'a' ] object