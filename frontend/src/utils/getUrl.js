let baseUrl = '';

export const setBaseUrl = (url) => {
  baseUrl = url;
};

export const getUrl = (path) => baseUrl + path;
