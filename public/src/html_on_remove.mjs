import { html_event_listener_remove } from "./html_event_listener_remove.mjs";
export function html_on_remove(component, type, on_load) {
  let { element } = component;
  html_event_listener_remove(element, type, on_load);
}
