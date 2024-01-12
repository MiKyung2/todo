class Input extends HTMLElement {
  static observedAttributes = ['value'];

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const style = document.creaeteElement('style');
    style.textContent = 'border-bottom: 1px solid black';

    shadowRoot.appendChild(style);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.addEventListener('input', this.handleInput.bind(this));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value' && oldValue !== newValue) {
      const valueChangeEvent = new CustomEvent('valuechange', {
        detail: { value: newValue },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(valueChangeEvent);
    }
  }

  handleInput(event) {
    const inputElement = event.target;
    this.value = inputElement.value;
  }
}

customElements.define('hddn-input', Input);
