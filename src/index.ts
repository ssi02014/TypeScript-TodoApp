import TodoItem from './TodoItem';
import { data } from './data';
import TodoCollection from './TodoCollection';

// for (let i = 0; i < data.length; i++) {
//   // let todoItem:TodoItem = new TodoItem(...); TodoItem 타입을 타입 추론 생략 가능
//   let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
//   todoItem.printDetails();
// }

const sampleTodos: TodoItem[] = data.map(
  item => new TodoItem(item.id, item.task, item.complete)
);

console.log(sampleTodos);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

