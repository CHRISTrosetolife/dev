export function html_scroll_top(component) {
  let { element } = component;
  element.scrollIntoView({
    block: "start",
    behavior: "auto",
  });
}
