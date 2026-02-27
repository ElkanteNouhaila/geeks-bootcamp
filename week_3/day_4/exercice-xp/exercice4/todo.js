export class TodoList {
    constructor() {
      this.tasks = []; 
    }
  
    addTask(description) {
      this.tasks.push({ description, completed: false });
      console.log(`Task added: "${description}"`);
    }
  
    markComplete(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].completed = true;
        console.log(`Task completed: "${this.tasks[index].description}"`);
      } else {
        console.log("Invalid task index");
      }
    }
  
    listTasks() {
      console.log("Todo List:");
      this.tasks.forEach((task, i) => {
        console.log(`${i + 1}. [${task.completed ? "X" : " "}] ${task.description}`);
      });
    }
  }