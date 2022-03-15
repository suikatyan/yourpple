import SecureLS from 'secure-ls';

export default class {
  #ls = null;

  constructor(option) {
    this.#ls = new SecureLS(option);
  }

  getItem(key) {
    return this.#ls.get(key);
  }

  setItem(key, value) {
    this.#ls.set(key, value);
  }

  removeItem(key) {
    this.#ls.remove(key);
  }
}
