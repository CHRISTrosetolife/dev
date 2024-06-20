export function html_attribute_get(component, name, value) {
  let { element } = component;
  element.setAttribute(name, value);
}
