export class Todos {
  todos = [];
  todoDescription = "";

  attached() {
    this.todos.push({description: 'Do something', done: false});
    this.todos.push({description: 'Do another thing', done: false});
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push({ description: this.todoDescription, done: false });
      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
