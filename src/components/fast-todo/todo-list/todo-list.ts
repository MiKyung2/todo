import { Observable, observable, volatile } from '@microsoft/fast-element';

export type Todo = { description: string; done: boolean };
export type TodoListFilter = 'all' | 'active' | 'completed';
export const TodoList = Context.create<ITodoList>('TodoList');

export interface ITodoList {
  activeFilter: TodoListFilter;
  readonly filtered: readonly Todo[];
  add(description: string): void;
  remove(todo: Todo): void;
}

export class DefaultTodoList {
  @observable private _todos: Todo[] = [];
  @observable public activeFilter: TodoListFilter = 'all';

  public get all() {
    return this._todos;
  }

  @volatile
  public get filtered(): readonly Todo[] {
    switch (this.activeFilter) {
      case 'active':
        return this._todos.filter(x => !x.done);
      case 'completed':
        return this._todos.filter(x => x.done);
      default:
        return this._todos;
    }
  }

  constructor(todos?: Todo[]) {
    if (todos) {
      this._todos = todos.map(x => reactive(x));
    }
  }

  public add(description: string) {
    this.splice(this._todos.length, 0, reactive({ description, done: false }));
  }

  public remove(todo: Todo) {
    const index = this._todos.indexOf(todo);
    index !== -1 && this.splice(index, 1);
  }

  private splice(index: number, removeCount: number, ...newItem: Todo[]) {
    this._todos.splice(index, removeCount, ...newItem);
    this.activeFilter !== 'all' && Observable.notify(this, '_todo');
  }
}
