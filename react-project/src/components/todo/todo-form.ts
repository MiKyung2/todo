import { ITodoList } from './todo-list';

export class TodoForm extends HTMLDivElement {
  description = '';

  todos: any;

  submitTodo() {
    this.description && this.todos.add(this.description);
    this.description = '';
  }
}
customElements.define('todo-form', TodoForm);
