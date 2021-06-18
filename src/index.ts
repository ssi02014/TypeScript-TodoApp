// import TodoItem from './model/TodoItem';
// import { data } from './data';
// import TodoCollection from './service/TodoCollection';

// const sampleTodos: TodoItem[] = data.map(
//   item => new TodoItem(item.id, item.task, item.complete)
// ); 
// /* sampleTodos
//   [
//     TodoItem { id: 1, task: '장보기', complete: true },
//     TodoItem { id: 2, task: 'TS 학습하기', complete: false },  
//     ...
//   ]
// */

// const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

// myTodoCollection.addTodo("JavaScript 학습하기");
// myTodoCollection.addTodo("정연재 만나기");
// myTodoCollection.markComplete(2, true);

// myTodoCollection.removeComplete();

// myTodoCollection.getTodoItems(true).forEach(item => {
//   //console.log(item) → TodoItem { id: 1, task: '장보기', complete: true }
//   item.printDetails()
// });


import TodoConsole from "./view/TodoConsole";

const todoConsole = new TodoConsole();
todoConsole.promptUser();