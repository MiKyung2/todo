import { FASTElement } from '@microsoft/fast-element';
import { styles } from './todo-app.styles';
import { template } from './todo-app.template';

export class TodoApp extends FASTElement {
  @TodoList todos!: TodoList;
}

export const app = TodoApp.compose({
  name: 'todo-app',
  template,
  styles,
});
