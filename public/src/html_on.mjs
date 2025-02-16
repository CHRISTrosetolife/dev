import { html_event_listener_add } from "./html_event_listener_add.mjs";
export function html_on(component, type, lambda) {
  let { element } = component;
  html_event_listener_add(element, type, lambda);
  let v = {
    remove: function () {html_event_listener_remove()},
  };
  return v;
}
