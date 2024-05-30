import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_git_auto() {
  return {
    name: function git_auto_name(root) {
      return html_span_text(root, "git_auto");
    },
    screen: function git_auto_screen(root) {},
  };
}
