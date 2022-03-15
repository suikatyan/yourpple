const registerdAlertsLocal = [];
const registerdAlerts = [];
const imidiateAlerts = [];

let index = 0;
const getIndex = () => {
  index += 1;

  return index;
};

export default {
  register(alert) {
    alert.id = getIndex();
    registerdAlertsLocal.push(alert);
  },
  show() {
    registerdAlerts.push(...registerdAlertsLocal);
    registerdAlertsLocal.splice(0);
  },
  showImidiate(alert) {
    alert.id = getIndex();
    imidiateAlerts.push(alert);
  },
  getRegisterdAlerts() {
    return registerdAlerts;
  },
  getImidiateAlerts() {
    return imidiateAlerts;
  },
  clear() {
    imidiateAlerts.splice(0);
    registerdAlerts.splice(0);
  },
};
