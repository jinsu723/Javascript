let testImg = document.getElementsByClassName("test-img");
let bigImgWrap = document.getElementsByClassName("big-img-wrap");
console.log(testImg);
// 모든 이미지 요소에 출력 이벤트 주기 위해 반복문 사용

for(let i=0; i<testImg; i++){
  // console.log(testImg[i]);
  testImg[i].addEventListener("click", function() {
    let src = this.setAttribute("src");
    console.log(src);
    console.log(this);

    let bigImg = document.querySelector(".big-img");
    // console.log(bigImg);
    bigImg.setAttribute("src", src);
    bigImgWrap[0].style.display = 'flex';
  });

  bigImgWrap[0].addEventListener("click", function() {
    this.style.display = "none";
  })
}