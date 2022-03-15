import axios from 'axios';

let func = () => {};

export default {
  create() {
    const instance = axios.create();
    instance.interceptors.request.use(func);

    return instance;
  },
  register(customFunc) {
    func = customFunc;
  },
};
