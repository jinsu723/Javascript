// 19번 : 재귀함수

// 팩토리얼 : n! 3! => 3 * 2 * 1

function factorial(n){
  // 재귀함수의 종료 조건
  if(n === 0){
    return 1;
  }

  // 재귀호출 : n * (n - 1)의 팩토리얼
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(6));

// 재귀함수를 이용하여 문자열 뒤집기
// hello => olleh  출력
// 함수명 reverseStr
function reverseStr1(str, index = 0){
  // 종료 조건 : 모든 문자를 처리 했을 때
  if(index == str.length){
    return "";
  }
  // 현재 문자 뒤에 재귀적으로 처리된 나머지 문자열 추가
  return reverseStr1(str, index + 1) + str[index];
}
// 작동 과정
// reverseStr1("Hello", 0) -> reverse("Hello", 1) + "H"
// reverseStr1("Hello", 1) -> reverse("Hello", 2) + "e"
// reverseStr1("Hello", 2) -> reverse("Hello", 3) + "l"
// reverseStr1("Hello", 3) -> reverse("Hello", 4) + "l"
// reverseStr1("Hello", 4) -> reverse("Hello", 5) + "o"
// 최종적으로 o + l + l + e + H => olleH

console.log(reverseStr1("Hello"));

// 2) slice 사용
function reverseStr2(str){
  // 종료조건
  if(str === "" || str.length === 1){
    return str;
  }

  // 문자열을 하나씩 처리
  return reverseStr2(str.slice(1)) + str[0];
}
console.log(reverseStr2("Hello"));
// slice 해당 인덱스만 빼준다


// 3) substr 사용
function reverseStr3(str){
  // 종료조건
  if(str === "" || str.length === 1){
    return str;
  }

  // substring(1) : 첫 번째 문자열을 제거하고 나머지 문자열 반환
  return reverseStr3(str.substr(1)) + str[0];
}
console.log(reverseStr3("Hello"));
// substr 범위를 지정해서 문자열 지우기 가능