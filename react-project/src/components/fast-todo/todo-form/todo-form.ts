import {
  customElement,
  FASTElement,
  observable,
} from '@microsoft/fast-element';
import { styles } from './todo-form.styles';
import { template } from './todo-form.template';
import { TodoList } from '../todo-list/todo-list';

@customElement({
  name: 'todo-form',
  template,
  styles,
});

export class TodoForm extends FASTElement {
  @observable public description: string = "";
  @TodoList todos!: TodoList;

  public submitTodo() {
    this.description && this.todos.add(this.description);
    this.description = "";
  }
}