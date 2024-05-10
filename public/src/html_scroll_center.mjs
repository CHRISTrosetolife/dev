export function html_scroll_center(component) {
  let { element } = component;
  element.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
}
