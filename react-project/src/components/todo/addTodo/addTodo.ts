import tmpl from './addTodo.html';

const template = document.createElement('template');
template.innerHTML = tmpl;

class AddTodo extends HTMLElement {
  _input: any = null;

  _button: any = null;

  static get observedAttributes() {
    return ['value'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    this._input = this.shadowRoot?.querySelector('input');
    this._button = this.shadowRoot?.querySelector('todo-button');

    this._button.addEventListener('click', () =>
      this.dispatchEvent(new CustomEvent('addTodo')),
    );
  }

  get value() {
    return this._input.value;
  }

  set value(value) {
    this._input.value = value;
  }
}

window.customElements.define('add-todo', AddTodo);
export default AddTodo;
