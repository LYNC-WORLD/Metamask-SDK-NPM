import config from "../config";
function updateConfig(newConfig) {
  Object.assign(config, newConfig);
  localStorage.setItem("debugger", config.debugger);
}
export default updateConfig;
