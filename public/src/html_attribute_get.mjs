export function html_attribute_get(component, name) {
  let { element } = component;
  return element.getAttribute(name);
}
