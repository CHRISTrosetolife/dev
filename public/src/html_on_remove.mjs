export function html_on_remove(component, type, on_load) {
  let { element } = component;
  element.removeEventListener(type, on_load);
}
