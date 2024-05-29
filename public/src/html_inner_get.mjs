export function html_inner_get(component, text) {
  let { element } = component;
  element.innerHTML = text;
}
