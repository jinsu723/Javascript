let numbersArray = new Array(10);  // 크기 10인 배열 선언

numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // 1부터 10까지의 정수 저장

console.log(numbersArray);  // 배열에 저장된 값 출력

function printEvenNumbers(arr){
  console.log("짝수만 출력");
  arr.forEach((value) => {
    if(value % 2 == 0){
      console.log(value)
    }
  })
}

printEvenNumbers(numbersArray);