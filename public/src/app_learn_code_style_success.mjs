import { log } from "./log.mjs";
import { html_style } from "./html_style.mjs";
export function app_learn_code_style_success(component) {
  log({
    component,
  });
  html_style(component, {
    "background-color": "lightgreen",
    "border-color": "MediumSeaGreen",
  });
  debugger
}
