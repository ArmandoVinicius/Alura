class View {
  constructor(element) {

    this._element = element;
  }

  template() {
    throw new Error('O método template deve ser sobrescrito');
  }

  update(model){
    this._element.innerHTML = this.template(model);
  }

}