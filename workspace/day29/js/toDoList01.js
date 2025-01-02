// 0번 : 복습문제
const deleteItem = document.querySelectorAll('.delete');
const inputItem = document.querySelector('#add-item');
const item = document.querySelector('ul');

console.log(deleteItem);
console.log(inputItem);
console.log(item);


for (let i = 0; i < deleteItem.length; i++) {
  deleteItem[i].addEventListener('click', () => {
  })
}

inputItem.addEventListener('click', (e) => {
  const inputText = document.querySelector('#new-item');
  console.log(inputText.value);
  const li = document.createElement("li");
  li.innerText = inputText.value;
  item.appendChild(li);
})