import { log } from "./log.mjs";
export function html_attribute_get(component, name) {
  let { element } = component;
  log({
    element,
  });
  element.getAttribute(name);
}
