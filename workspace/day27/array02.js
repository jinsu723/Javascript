// 5번 : 배열 메소드

let numbers = [10, 5, 3, 2, 7, 9];
console.log(numbers, typeof(numbers));

// .push() : 가장 마지막에 값 추가
numbers.push(100);
numbers.push(900);
console.log(numbers);

// .join() : 전달한 값으로 구분한 뒤 문자열로 리턴
console.log([1, 2, 3, 4, 5], typeof([1, 2, 3, 4, 5]));  // object
console.log([1, 2, 3, 4, 5].join("  "), typeof([1, 2, 3, 4, 5].join("  ")));  // string

// .slice(시작, 끝) : 원하는 부분을 추출하기 위해서 시작 인덱스와 마지막 인덱스를 전달한다
// 마지막 인덱스는 포함되지 않는다
let number2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(number2, typeof(number2));

// 인덱싱 : 배열명[인덱스번호] 하나의 값만 추출할 때 사용
console.log(number2[0], typeof(number2[1]));

// 슬라이싱 : 여러 개 값을 추출할 때 사용
console.log(number2.slice(0, 1), typeof(number2.slice(0, 1)));

console.log(number2.slice(2, 8));  // [ 3, 4, 5, 6, 7, 8 ]
console.log(number2.slice[(2, 5)]);  // undefined
// slice[(2, 5)] => slice[5] 처럼 접근하는 것으로 해석되는데 함수가 배열로 접근되어 undefined로 결과 출력된다
// slice는 두 개의 정수를 매개변수로 받는다 [2, 5] 첫 번째 매개변수로 처리되고 두 번째 매개변수는 undefined로 처리된다

// .pop() : 마지막 요소를 삭제, 해당 값 반환
console.log(number2.pop());
console.log(number2);

// .shift() : 첫 번째 요소를 삭제, 해당 값 반환
console.log(number2.shift());
console.log(number2);

// .splice(인덱스번호, 개수) : 인덱스번호 삭제(무조건 2개 매개변수로 작성)
console.log(number2.splice(2, 1)); // 4
console.log(number2);

// .splice(개수) : 매개변수를 1개만 전달하면 0번째 인덱스부터의 개수로 인식하여 삭제된다
console.log(number2.splice(2));
console.log(number2);

// .indexOf(값) : 값을 array(기존배열)에서 찾은 뒤 인덱스 번호를 반환, 값을 못 찾으면 -1 반환
console.log(number2.indexOf(2));
console.log(number2);
console.log(number2.indexOf(3));

// .fill(값) : 배열의 모든 요소를 해당 값으로 채우기
// .fill(값, 시작인덱스, 종료인덱스) : 시작인덱스 ~ 종료인덱스-1까지 해당 값으로 채운다
const numbers3 = new Array(5).fill(10);
console.log(numbers3);

// 반복문 : forEach(callback)
number2.forEach(function (element, index, array){
  console.log(element);  // 값 출력
  console.log(index);  // 인덱스 출력
  console.log(array);  // 원본배열 출력
});