import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_git_auto() {
  return {
    name: function git_auto_name(root) {
      return html_span_text(root, "automatically commit to git");
    },
    screen: function git_auto_screen(root) {
      "if `run.mjs` is changed to `run_git.mjs` , then the `function` will be ran and then a git commit will be created :";
    },
  };
}
