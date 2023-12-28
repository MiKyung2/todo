import { html } from '@microsoft/fast-element';
import type { TodoForm } from '../todo-form/todo-form';

export const template = html<TodoForm>`
  <form @submit=${x => x.submitTodo()}>
    <input type="text" />
    <button type="submit" ?disabled=${x => !x.description}>Add Todo</button>
  </form>
`;
