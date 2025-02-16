import { html_event_listener } from "./html_event_listener.mjs";
export function html_on(component, type, lambda) {
  let { element } = component;
  html_event_listener(element, type, lambda);
  let v = {
    lambda,
  };
  return v;
}
