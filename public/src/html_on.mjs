export function html_on(component, type, lambda) {
  let { element } = component;
  element.addEventListener(type, lambda);
}
