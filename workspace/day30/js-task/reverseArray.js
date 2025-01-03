let numbersArray = new Array(10);  // 크기 10인 배열 선언

numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // 1부터 10까지의 정수 저장

// console.log(numbersArray);  // 배열에 저장된 값 출력

function reverseArray(arr){
  let newArray = new Array(arr.length);

  for(let i=arr.length-1; i>=0; i--){
    newArray[arr.length-i-1] = arr[i];
  }
  return newArray;
}

console.log(reverseArray(numbersArray));
