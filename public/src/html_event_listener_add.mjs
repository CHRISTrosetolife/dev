export function html_event_listener_add(element, type, lambda) {
  element.addEventListener(type, lambda);
}
