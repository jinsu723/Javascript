// 객체 만들기
const newTaskInput = document.querySelector('#new-task');
const todoList1 = document.querySelector('#task1 ul');
const todoList2 = document.querySelector('#task2 ul');
const todoList3 = document.querySelector('#task3 ul');
const addTaskBtn = document.querySelector('#add-button');

let TaskText1;
let TaskText2;
let TaskText3;

// 라디오 선택 버튼 확인 함수
function whatChecked() {
  const checked = document.querySelector('input[name="do"]:checked');
  return checked;
}

// 할 일 추가
function addTask() {
  const newTaskText = newTaskInput.value;

  // 지난 할 일
  if (whatChecked().id == 'do1') {
    TaskText1 = newTaskText;
    const li = document.createElement('li');
    li.innerHTML = `${newTaskText} <button class="done">완료</button>
                                 <button class="delete">삭제</button> `;

    todoList1.appendChild(li);
    newTaskInput.value = '';
    li.querySelector('.delete').addEventListener('click', deleteTask1);
    li.querySelector('.done').addEventListener('click', done1);

    // 오늘 할 일
  } else if (whatChecked().id == 'do2') {
    TaskText2 = newTaskText;
    const li = document.createElement('li');
    li.innerHTML = `${newTaskText} <button class="done">완료</button>
                                   <button class="delete">삭제</button> `;

    todoList2.appendChild(li);
    newTaskInput.value = '';
    li.querySelector('delete').addEventListener('click', deleteTask2);
    li.querySelector('.done').addEventListener('click', done2);

    // 내일 할 일
  } else {
    TaskText3 = newTaskText;
    const li = document.createElement('li');
    li.innerHTML = `${newTaskText} <button class="done">완료</button>
                                   <button class="delete">삭제</button> `;

    todoList3.appendChild(li);
    newTaskInput.value = '';
    li.querySelector('.delete').addEventListener('click', deleteTask3);
    li.querySelector('.done').addEventListener('click', done3);
  }
}

// 할 일 완료하면 취소선 그어주는 함수
// 지난 할 일 취소선
function done1(event) {

  const text = event.target.parentElement
  text.innerHTML = `<del>${TaskText1}</del><button class="delete">삭제</button>`

  text.querySelector('.delete').addEventListener('click', deleteTask1);
}

// 오늘 할 일 취소선
function done2(event) {

  const text = event.target.parentElement
  text.innerHTML = `<del>${TaskText2}</del><button class="delete">삭제</button>`

  text.querySelector('.delete').addEventListener('click', deleteTask2);
}

// 내일 할 일 취소선
function done3(event) {

  const text = event.target.parentElement
  text.innerHTML = `<del>${TaskText3}</del><button class="delete">삭제</button>`

  text.querySelector('.delete').addEventListener('click', deleteTask3);
}



// 할 일 삭제 함수
// 지난 할 일 삭제 함수
function deleteTask1(event) {
  const listTask = event.target.parentElement;
  todoList1.removeChild(listTask);
}

// 오늘 할 일 삭제 함수
function deleteTask2(event) {
  const listTask = event.target.parentElement;
  todoList2.removeChild(listTask);
}

// 내일 할 일 삭제 함수
function deleteTask3(event) {
  const listTask = event.target.parentElement;
  todoList3.removeChild(listTask);
}


// 할 일 추가 버튼 클릭 이벤트
addTaskBtn.addEventListener('click', addTask);
