export function html_attribute_set(component, name, value) {
  let { element } = component;
  element.setAttribute(name, value);
}
