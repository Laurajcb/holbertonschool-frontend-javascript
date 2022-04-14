export default class Currency {
  constructor(code, name) {
    // create objects
    this._name = name;
    this.code = code;
  }

  //Methods

  displayFullCurrency() {
    return (`${this.name} ${this.code}`);
  }

  //setters
  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  //getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }
}