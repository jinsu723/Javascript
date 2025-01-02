const navLogin = document.querySelector('.nav--login');
const modalBox = document.querySelector('.modal-box');
const xbox = document.querySelector('.x-box');

navLogin.addEventListener('click', function(){
  modalBox.style.display = 'flex';
});

xbox.addEventListener('click', function() {
  modalBox.style.display = 'none';
})

xbox.addEventListener('mousover', function() {
  this.style.color = 'red';
});

xbox.addEventListener('mouseout', function() {
  this.style.color = 'black';
})












// function openLogin() {
//   document.getElementsByClassName('modal-box').style.display = 'block';
// }