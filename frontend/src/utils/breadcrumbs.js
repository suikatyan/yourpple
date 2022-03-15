export default (keys, vuetify) =>
  keys.map((key, index) => ({
    text: vuetify.lang.t(`$vuetify.${key}.title`),
    to: key,
    disabled: index === keys.length - 1,
  }));
