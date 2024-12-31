//1. 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
// 콜백을 사용하여 문자열을 역순으로 출력
//함수명 printStr()  매개변수 1개
//함수명 reverseStr() 콜백사용
// 참고 : split(), reverse(), join()

function reverseStr(str, callback){
  callback(str.split('').reverse().join(''));
}

const printStr = function(strArgs){
  console.log(strArgs);
}

reverseStr('길진수', printStr);

//2.  성과 이름을 전달받아서 풀네임을 만든 뒤 000님 환영합니다 출력하기

//함수명 welcomeUser
function welcomeUser(lastName, firstName){
  console.log(`${firstName}${lastName}님 환영합니다`);
}

welcomeUser('진수', '길');

//3. 사용자 나이를 입력후 성인이면 true반환, 아니면 false 반환

//함수명 isAdult
function isAdult(age){
  if(age >= 20){
    return true;
  } else {
    return false;
  }
}

console.log(isAdult(12));
console.log(isAdult(30));

//4. 객체를 사용해 성적관리 프로그램 만들기
//프로그램이 등록되지 않은 학생은 3명이다
//이름 : 둘리, 나이 : 5, 점수 : 80
//이름 : 도우너, 나이 : 6, 점수 : 50
//이름 : 또치, 나이 : 5, 점수 : 90
// 학생마다의 점수 출력하기(이름 점수 같이 출력할 것)
// 3명을 모두 프로그램에 등록시킨다
// 3명의 학생 정보를 학교 객체로 선언 후에 학교 객체에 등록시킨다
console.log('*****성적관리 프로그램*****');

class Student{
  constructor(name, age, score){
    this.name = name;
    this.age = age;
    this.score = score;
  }
}

const stu1 = new Student('둘리', 5, 80);
const stu2 = new Student('도우너', 6, 50);
const stu3 = new Student('또치', 5, 90);

const students = [stu1, stu2, stu3];

students.forEach(student => {
  console.log(`이름 : ${student.name}, 성적 : ${student.score}`);
})

class School{
  constructor(student){
    this.student = student;
  }
}

const student1 = new School(stu1);
const student2 = new School(stu2);
const student3 = new School(stu3);

const schoolMember = [student1, student2, student3];

//5. 포인트를 각각 객체에 추가하고 순서대로 point는 80, 50, 90이다
// 포인트를 모두 더한 값을 출력하라.
students[0].point = 80;
students[1].point = 50;
students[2].point = 90;

console.log(School.student,"ee");

let pointSum = 0;
for(let i in schoolMember){
  pointSum += schoolMember[i].point; 
}

console.log('포인트 합계 : ' + pointSum);