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

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.addTodo("정연재 만나기");

myTodoCollection.markComplete(2, true);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach(item => {
  //console.log(item) → TodoItem { id: 1, task: '장보기', complete: true }
  item.printDetails()
});
