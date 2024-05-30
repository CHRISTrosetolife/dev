import { noop } from "./noop.mjs";
import { html_style_alternate_short } from "./html_style_alternate_short.mjs";
import { url_repository } from "./url_repository.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { run_git } from "./run_git.mjs";
import { run } from "./run.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { function_new } from "./function_new.mjs";
import { html_p_text } from "./html_p_text.mjs";
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
          "` ...",
      ]);
      let i = 1;
      app_dev_screen_img(app_dev_screen_git_auto, root, i++);
      html_p_text(root, "... and a new function is created ...");
      app_dev_screen_img(app_dev_screen_git_auto, root, i++);
      html_style_alternate_short(
        root,
        [noop],
        "... and a commit is added to git :",
      );
      app_dev_screen_img(app_dev_screen_git_auto, root, i++);
      "syncing with github on the internet takes time , so that is omitted from `" +
        run_git.name +
        ".mjs`'";
      url_repository() + "commit/7df7f06b7d48b423cc103c23f4b3573295f694ee";
    },
  };
}
