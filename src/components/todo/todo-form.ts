import { ITodoList } from './todo-list';

export class TodoForm extends HTMLDivElement {
  description = '';

  todos: ITodoList;

  submitTodo() {
    this.description && this.todos.add(this.description);
    this.description = '';
  }
}
customElements.define('todo-form', TodoForm);
