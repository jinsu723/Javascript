//10번 : 연산자
//2) 논리연산자

// 논리합 or(||) : 두값중 하나라도 truthy하면 결과는 true
// 단축평가 : 앞의 값이 truthy이면 뒤의 값은 평가되지 않고 앞의 값을 반환한다(주로 기본값 설정에 사용됨)
let data1 = undefined || "기본값"; //data1는 기본값
let data2 = "값 있음" || "기본값"; //data2는 값있음
console.log(data1, data2);

let data = 10;
console.log(data, typeof data);
data = data || 1; //data는 10, truthy한 값이므로 기존값 유지
console.log(undefined || 1); //1, undefined는 falsy
console.log(1 || undefined); //1 (1은 truthy이므로 뒤의 값 평가하지 않음)
console.log(data >= 10 || 50); //true(data가 10이상이므로 true반환, 앞에가 truthy이므로 오른쪽 50값 평가되지 않음)
console.log(data < 10 || 0); //true(data < 10이 false 이므로 뒤에 값 0이 반환)

// && : 선행 조건식이 false면 뒤로 넘어가지 않고 선행조건식이 true일 때만 뒤에 있는 값을 확인한다
let data3 = true && "실행값";  // 실행값
console.log(data3);

let data4 = false && "실행되지않음";  // false
console.log(data4);
console.log(1 && undefined);  // undefined 왼쪽 값이 falsy면 왼쪽 값을 반환

console.log(undefined && 10);  // undefined
// 왼쪽 값이 undefined => falsy
// &&를 만나면 첫 번째 falsy값을 바로 반환, 오른쪽 값 10은 평가되지 않음
// => &&의 왼쪽 값이 falsy면 왼쪽의 값 반환, 왼쪽 값이 truthy면 오른쪽 값 반환

// 논리 부정 연산자
console.log(!true);  // false
console.log(!false);  // true
console.log(!null);  // true
console.log(!undefined);  // true

// 병합 연산자 ??
// 왼쪽 값이 null 또는 undefined인 경우에만 오른쪽 값을 반환한다

let user = null;
let value = "defualt value";

console.log(user, typeof user, value, typeof value, Boolean(user), Boolean(value));
//          null      objec                 string      false         true

console.log(null ?? value);
console.log(undefined ?? value);
console.log(false ?? value);
console.log(10>3 ?? value);

// 옵셔널 체이닝
let users = {
  prifile:{
    name : undefined,
    age : 5
  },
};
console.log(users);  // { prifile: { name: undefined, age: 5 } }
let userName = users?.profile?.name;
console.log(userName);

let data9 = users?.profile?.name ?? value;
  // undefined ?? value => 왼쪽이 undefined이므로 value 값이 출력된다
console.log(data9);

// 삼항연산자
// 조건식 ? true 일 때의 값 : false일 때의 값
let age = 20;
let isAdult = age >= 19 ? "성인" : "미성년자";
console.log(isAdult);