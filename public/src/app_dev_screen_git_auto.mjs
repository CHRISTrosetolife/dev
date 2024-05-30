import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { run_git } from "./run_git.mjs";
import { run } from "./run.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { function_new } from "./function_new.mjs";
export function app_dev_screen_git_auto() {
  return {
    name: function git_auto_name(root) {
      return html_span_text(root, "automatically commit to git");
    },
    screen: function git_auto_screen(root) {
      html_style_alternate_monospace_short_multiple(root, [
        "suppose we want to create a `function` named `greetings_to_the_world",
        "suppose we also want to commit this new `function` to git",
        "then we can change `" +
          run.name +
          ".mjs` to `" +
          run_git.name +
          ".mjs` and run `" +
          function_new.name +
          "` :",
      ]);
      ("https://github.com/CHRISTrosetolife/dev/commit/7df7f06b7d48b423cc103c23f4b3573295f694ee");
    },
  };
}
