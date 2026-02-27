import { TodoList } from './todo.js';

const myTodo = new TodoList();

myTodo.addTask("Finish homework");
myTodo.addTask("Clean the room");
myTodo.addTask("Buy groceries");

myTodo.markComplete(1);

myTodo.listTasks();