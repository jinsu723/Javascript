// 8번 : 형변환

// 암시적 형변환(묵시적 형변환)
// 1) 숫자와 문자열 덧셈 연산
console.log(1 + "2", typeof(1 + "2"));  // 12, string
console.log("3" + 4 + 5, typeof("3" + 4 + 5));  // 345, string
console.log(1 + 2 + "3");  // 숫자끼리 먼저 더해진 후 문자열로 연결된다 33

// 2) 산술연산
console.log("5" - 3);  // 문자열 5가 숫자 5로 변환되어 산술연산 결과 2
console.log("3px" - 1);  // NaN
console.log("5" * 2);  // 10

// 3) 논리형 타입과 숫자의 연산
console.log(true + 1);  // 2
console.log(Number(true));  // 1
console.log(Number(false));  // 0
console.log(10 + NaN);  // NaN