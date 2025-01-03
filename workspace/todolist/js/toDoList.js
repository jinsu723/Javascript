// DOM 요소 가져오기
const todoList = document.querySelector("#todo-list ul");
const newItemInput = document.querySelector("#new-item");
const addItemButton = document.querySelector("#add-item");

// 항목 추가 함수
function addItem() {
  const newItemText = newItemInput.value.trim(); // 입력값 가져오기 (공백 제거)

  if (newItemText === "") {
    alert("새로운 할일을 입력하세요!");
    return;
  }

  // 새로운 li 요소 생성
  const li = document.createElement("li");
  li.innerHTML = `${newItemText} <button class="delete">삭제</button>`;

  // 리스트에 추가
  todoList.appendChild(li);

  // 입력 필드 초기화
  newItemInput.value = "";

  // 새로 추가된 삭제 버튼에 이벤트 리스너 연결
  li.querySelector(".delete").addEventListener("click", deleteItem);
}

// 항목 삭제 함수
function deleteItem(event) {
  const listItem = event.target.parentElement; // 삭제 버튼의 부모 요소 (li)
  todoList.removeChild(listItem); // li 삭제
}

// 추가 버튼 클릭 이벤트
addItemButton.addEventListener("click", addItem);

// 기존 삭제 버튼들에 이벤트 리스너 연결
document.querySelectorAll(".delete").forEach((button) => {
  button.addEventListener("click", deleteItem);
});