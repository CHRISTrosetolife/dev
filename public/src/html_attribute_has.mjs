export function html_attribute_has(button, value) {
  let { element } = button;
  let disabled_is = element.hasAttribute(value);
  return disabled_is;
}
