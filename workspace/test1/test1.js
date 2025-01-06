const addButton = document.querySelector('#add-button');
const listBox = document.getElementById('task-list');

addButton.addEventListener('click', buttonClickEvent);

function buttonClickEvent(){
  let memo = prompt('추가할 항목을 입력하세요');
  console.log(memo);

  if(memo !== null){
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" class="check-box"> ${memo} <button class="delete">삭제</button></input>`
    listBox.appendChild(li);

    const checking = document.querySelectorAll('.check-box');
    checking.forEach((check) => {
      check.addEventListener('click', (e) => {
        if(e.target.checked){
          console.log('선택됨');
          li.style.backgroundColor = 'blue';
        } else {
          li.style.backgroundColor = null;
        }
      })
    })

    li.querySelector('.delete').addEventListener('click', deleteList);
  }

}

function deleteList(event) {
  const delItem = event.target.parentElement;
  console.log(event.target.parentElement);
  listBox.removeChild(delItem);
}