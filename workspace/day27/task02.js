//1. 나이가 19살 이상이면 입장가능, 19살 미만이면 입장 불가 출력
// 나이가 10살이면 당첨을 출력하고 아니면 다음기회에 출력
// 본인이름, 나이는 상수로 설정, 삼항연산자 사용할 것

//출력결과
// 본인이름님은 00살 입장가능여부는 결과 
// 이벤트 당첨여부
//출력

let name = '길진수';
const age = 27;

console.log(`${name}님은 ${age}살. 입장가능 여부는 :`, age < 19 ? '입장불가' : '입장가능');
console.log('이벤트 당첨 여부 :', age === 10 ? '당첨' : '다음기회에');

//2. 점수가 60점 이상이면 합격, 60점 미만이면 불합격출력
// 점수가 100점이면 장학생, 아니면 일반학생 출력
// 학생이름, 점수는 상수로 설정
const stu1 = '짱구';
const stu2 = '유리';
const stu3 = '진수';

const stu1Scr = 63;
const stu2Scr = 12;
const stu3Scr = 100;

function grade(name, score){
  if(score >= 60){
    console.log(`${name}: 합격`);
  } else {
    console.log(`${name}: 불합격`);
  }

  if(score === 100){
    console.log(`${name}: 장학생`);
  } else {
    console.log(`${name}: 일반학생`);
  }
}

grade(stu1, stu1Scr);
grade(stu2, stu2Scr);
grade(stu3, stu3Scr);

//3. 학생의 이름과 성적을 입력받아서 성적에 따른 학점 출력
// 90점 이상 : A, 80점 이상 : B,  70점이상 : C, 그외 : F
function checkGrade(score){
  if(score >= 90){
    return 'A';
  } else if(score >= 80){
    return 'B';
  } else if(score >= 70){
    return 'C';
  } else {
    return 'F';
  }
}

console.log(checkGrade(100));
console.log(checkGrade(50));
console.log(checkGrade(88));
console.log(checkGrade(70));

//4. 1부터 100까지의 숫자중 3, 6, 9의 배수 합계 출력
let numSum = 0;
for(let i=1; i<=100; i++){
  if(i%3===0 || i%6===0 || i%9===0){
    numSum += i;
  }
}
console.log(numSum);