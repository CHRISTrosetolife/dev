export function html_scroll_top(component) {
  let { element } = component;
  element.scrollTo({
    top: 0,
    behavior: "auto",
  });
}
