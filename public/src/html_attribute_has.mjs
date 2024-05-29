export function html_attribute_has(button, value) {
  let { element } = button;
  let result = element.hasAttribute(value);
  return result;
}
