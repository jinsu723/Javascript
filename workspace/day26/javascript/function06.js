// 16번 : 즉시 실행함수

(function () {
  console.log('javascript 2일차 수업');
})();

let result = (function (num1, num2) {
  return num1 + num2;
})(10, 20);

console.log(result);

(function (num1, num2) {
  console.log('즉시실행');
  return num1 + num2;
})(40, "40");


let result2 = (function (num1, num2) {
  return num1 + num2;
})(50, "30");

console.log(result2);

const Counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
  };
})();

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());

// 초기화 코드
(function(){
  const name = "짱구";
  console.log(`${name}, 안녕!`);
})();