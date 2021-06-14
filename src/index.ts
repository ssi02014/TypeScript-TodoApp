import TodoItem from './TodoItem';
import {data} from './data';

for (let i = 0; i < data.length; i++) {
  // let todoItem:TodoItem = new TodoItem(...); TodoItem 타입을 타입 추론 생략 가능
  let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
  todoItem.printDetails();
}