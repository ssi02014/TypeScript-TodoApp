import TodoItem from './TodoItem';

//타입 추론으로 타입 설정 따로 안함
const data = [
  { id: 1, task: "장보기", complete: true },
  { id: 2, task: "TS 학습하기", complete: false },
  { id: 3, task: "리액트 학습하기", complete: true },
  { id: 4, task: "취업하기", complete: false },
];

for (let i = 0; i < data.length; i++) {
  // let todoItem:TodoItem = new TodoItem(...); TodoItem 타입을 타입 추론 생략 가능
  let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
  todoItem.printDetails();
}