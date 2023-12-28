export type Todo = { description: string; done: boolean };
export type TodoListFilter = 'all' | 'active' | 'completed';

export interface ITodoList {
  activeFilter: TodoListFilter;
  readonly filtered: readonly Todo[];
  add(description: string): void;
  remove(todo: Todo): void;
}

export class DefaultTodoLst {
  private _todos: Todo[] = [];

  activeFilter: TodoListFilter = 'all';

  constructor(todos: Todo[]) {
    this._todos = todos || [];
  }

  add(description: string) {
    this._todos = [...this._todos, { description, done: false }];
  }

  remove(todo: Todo[]) {
    this._todos = this._todos.filter(item => !todo.includes(item));
  }
}
