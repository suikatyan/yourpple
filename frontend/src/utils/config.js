const APP_KEY = 'yourppleConfig';

export default class Config {
  static get(key = undefined, value = undefined) {
    const json = localStorage.getItem(APP_KEY);
    const config = json === null ? {} : JSON.parse(json);
    if (key === undefined) {
      return config;
    }

    if (Object.prototype.hasOwnProperty.call(config, key)) {
      return config[key];
    }

    return value;
  }

  static set(data, key = undefined) {
    if (key === undefined) {
      localStorage.setItem(APP_KEY, JSON.stringify(data));
    }

    const config = Config.get();
    config[key] = data;
    const json = JSON.stringify(config);
    localStorage.setItem(APP_KEY, json);
  }
}
