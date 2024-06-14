export function html_scroll_center(component) {
  let { element } = component;
  let options = {
    behavior: "auto",
    block: "center",
    inline: "center",
  };
  element.scrollIntoView(options);
}
