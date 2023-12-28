import { html, repeat } from '@microsoft/fast-element';
import type { TodoApp } from '../todo-app/todo-app';
import type { Todo } from '../todo-list/todo-list';
import './todo-form';

export const template = html<TodoApp>`
  <h1>FAST Todos</h1>
  <todo-form />
  <section>
    <label for="filter">Filter:</label>
    <select
      name="filter"
      title="filter"
      :value=${twoWay(x => x.todos.activeFilter)}
    >
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="complated">Completed</option>
    </select>
    <ul class="todo-list">
      ${repeat(
        x => x.todos.filtered,
        html<Todo, TodoApp>` <li class="todo">
          <input type="checkedbox" :checked=${twoWay(x => x.done)} />
          <span class="description ${x => (x.done ? 'done' : '')}">
            ${x => x.description}
          </span>
          <button
            @click=${(x, c) => c.parent.todos.remove(x)}
            aria-label="Remove item"
          >
            &times;
          </button>
        </li>`,
      )}
    </ul>
  </section>
`;
