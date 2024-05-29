export function html_attribute_set(component, p, value) {
  let { element } = component;
  element.setAttribute(p, value);
}
