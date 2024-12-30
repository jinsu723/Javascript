// 6번 : 배열 실습
// 1. 학생의 정보를 저장하는 객체를 만들고 그 학생의 정보를 출력하기
//  학생 정보 : 이름, 나이, 성적(1과목)
// 1) 객체에 최소 3명의 데이터를 추가하고 이름과 성적 출력하기

class Student{
  constructor(name, age, grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

stu1 = new Student('길진수', 20, 'A');
stu2 = new Student('진수길', 21, 'B');
stu3 = new Student('수길진', 22, 'C');

const students = [stu1, stu2, stu3];

students.forEach(student => {
  console.log(student);
})


// 2) 객체에서 이름 키에 해당하는 값들만 출력하기
students.forEach(student => {
  console.log('이름 : ' + student.name);
})

// 3) 객체에 새로운 속성(학년)을 추가하고 객체 전체 출력하기(for문 실행)
for(let key in students){
  students[key].g = '1학년';
}

for(let key in students){
  console.log(students[key]);
}

// //방법2) 생성자 함수 사용
// function Students2(name, age, score){
//   this.name = name;
//   this.age = age;
//   this.score = score;
// }

// //학생 객체 생성
// const student4 = new Students1("짱구", 5, 85);
// const student5 = new Students1("철수", 5, 90);
// const student6 = new Students1("유리", 5, 100);


// //방법3) 객체 리터럴 바로 사용
// const students3 = {
//   student1 : {name : '짱구', age : 5, score:90},
//   student2 : {name : '철수', age : 5, score:100},
//   student3 : {name : '유리', age : 5, score:88},
// };


// 2. 배열의 모든 요소를 2배로 증가시켜 새로운 배열을 만들어 출력하기
const numbers = [1, 2, 3, 4, 5];
// 1)) 2배 증가시켜 새로운 배열로 출력하기
const numberMul = numbers.map(function(element){
  return element * 2;
})

console.log(numberMul);

// 2)) 배열의 길이를 구하고 출력하기
console.log('배열의 길이 : ' + numberMul.length);

// 3) 배열에서 특정 요소를 삭제하기(3) 메소드 사용
console.log('3번인덱스 값 : ' + numberMul[3]);
numberMul.splice(3, 1);
console.log(numberMul);

// 4) 배열에서 특정 값을 검색하고 그 값의 인덱스 출력하기
const animals = ['dog', 'cat', 'rabbit'];
console.log(animals.indexOf('dog'));
console.log(animals.indexOf('cat'));
console.log(animals.indexOf('rabbit'));

// 5) 배열의 첫 번째와 마지막 요소를 제거한 뒤 남은 배열 출력하기
const colors = ['red', 'blue', 'green', 'yellow'];
console.log(colors);

colors.shift();
console.log(colors);

colors.pop();
console.log(colors);

//3. 혼합문제
//1) 배열의 요소를 객체로 변환하여 새로운 배열을 만들기
//  주어진 배열의 값을 객체의 value 속성으로 저장할것
const data = [10, 20, 30];

const value = [];
for(let i=0; i<data.length; i++){
  value[i] = {value: data[i]};
}

console.log(value);

//출력결과 : [{value: 10}, {value: 20}, {value: 30}]

//2) 배열을 활용하여 특정값을 기준으로 객체 업데이트하기
const users = [
  {id : 1, name : "짱구", age : 5, subject : 'javascript'},
  {id : 2, name : "철수", age : 5, subject : 'javascript'},
  {id : 3, name : "맹구", age : 5, subject : 'javascript'}, 
];
//id가 2인 객체의 나이를 6으로 변경, subject를 'web표준'으로 변경

for(let i=0; i<users.length; i++){
  if(users[i].id === 2){
    users[i].id = 6;
    users[i].subject = 'web표준';
  }
}

console.log(users);

//3) 배열의 요소를 모두 더하여 총합 출력하기
const numbers2 = [2, 5, 20, 10];

let sum = 0;

for(let i of numbers2){
  sum += i;
}

console.log(sum)

