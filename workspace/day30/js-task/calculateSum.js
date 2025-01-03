let numbersArray = new Array(10);  // 크기 10인 배열 선언

numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // 1부터 10까지의 정수 저장

console.log(numbersArray);  // 배열에 저장된 값 출력

function calculateSum(arr){
  let sum = 0;
  arr.forEach((value) => {
    sum += value;
  })
  return sum;
}

console.log(calculateSum(numbersArray));