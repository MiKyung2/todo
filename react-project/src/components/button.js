customElements.define(
  'hddn-button',
  class extends HTMLButtonElement {
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      console.log(shadowRoot);

      const span = document.createElement('span');
      const suffix = document.createElement('div');
      const prefix = document.createElement('div');

      const style = document.createElement('style');
      style.textContent = 'span { background-color: red; font-size: 14px }';

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(span);

      this.addEventListener('click', () => {
        console.log('button click');
      });
    }
  },
);
