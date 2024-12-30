// 8번 : filter()
// cont newArray = 배열명.filter(callback(element[, index[, array]][, thisArgs]));

// 1부터 10까지 요소 중 짝수 필터링
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers.filter(function(element){
  return element % 2 === 0;
});

console.log(even);

// 짝수 인덱스의 요소만 출력
const evenIdx = numbers.filter(function(element, index){
  return index % 2 === 0;
})
console.log(evenIdx);

// 배열의 짝수 요소 중 두 배로 만든 새로운 배열 생성(map, filter 둘 다 사용)
const evenVal = numbers.filter(function(element){
  return element % 2 === 0;
}).map(function(element){
  return element * 2;
})

console.log(`배열의 짝수 요소 중 두 배로 만든 새로운 배열 생성(map, filter 둘 다 사용) : ${evenVal}`);

const evenVal2 = numbers.filter((element) => {
  element % 2 === 0
}).map((element) => element * 2);
console.log(evenVal2);
