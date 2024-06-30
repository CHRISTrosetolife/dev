export function html_event_listener_remove(element, type, on_load) {
  element.removeEventListener(type, on_load);
}
