let $box2 = $('.box2');
console.log($box2);

// let box1 = document.querySelector('.box1');
// console.log(box1);

console.log($box2.parent());  // 부모 요소인 main 요소가 선택
console.log($box2.parents());  // 조상 요소인 main, body, html 요소 선택
console.log($box2.prev());  // 형 요소인 box1 요소 선택
console.log($box2.nextAll());  // 동생 요소 전체 선택
console.log($box2.nextAll()[1]);  // 인덱스 번호로 접근 가능

// 클래스 이름으로 가져온 요수 중 index 2번 요소 선택
console.log($('.div-box').eq(2));
console.log($('.div-box'));