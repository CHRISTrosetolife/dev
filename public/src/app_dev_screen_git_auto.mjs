import { fn_name } from "./fn_name.mjs";
import { git_ac_message_commit } from "./git_ac_message_commit.mjs";
import { git_ac_message_add } from "./git_ac_message_add.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_code_multiple } from "./html_cycle_code_multiple.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { url_repository_commit } from "./url_repository_commit.mjs";
import { html_style_link } from "./html_style_link.mjs";
import { noop } from "./noop.mjs";
import { app_dev_screen_img } from "./app_dev_screen_img.mjs";
import { run_git } from "./run_git.mjs";
import { run } from "./run.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_dev_screen_git_auto() {
  return {
    name: function git_auto_name(root) {
      return html_span_text(root, "automatically commit to git");
    },
    screen: function git_auto_screen(root) {
      html_cycle_code_multiple(root, [
        "suppose we want to create a `function` named `greetings_to_the_world",
        "suppose we also want to commit this new `function` to git",
        "then we can change `" +
          run.name +
          ".mjs` to `" +
          run_git.name +
          ".mjs` and run `" +
          fn_name("function_new") +
          "` ...",
      ]);
      let i = 1;
      app_dev_screen_img(app_dev_screen_git_auto, root, i++);
      html_cycle_code(root, "... and a new `function` is created ...");
      app_dev_screen_img(app_dev_screen_git_auto, root, i++);
      html_cycle_p(
        root,
        [
          noop,
          html_style_link(
            url_repository_commit("7df7f06b7d48b423cc103c23f4b3573295f694ee"),
          ),
        ],
        "... and a `commit` is added to git :",
      );
      app_dev_screen_img(app_dev_screen_git_auto, root, i++);
      html_cycle_code_multiple(root, [
        string_combine_multiple([
          "this does a `",
          git_ac_message_add(),
          "` and a `",
          git_ac_message_commit(),
          " ...",
        ]),
        "the commit message is a timestamp and the name of the command and its arguments",
        "waiting for `git push` after each command slows development , so `git push` is omitted from `" +
          run_git.name +
          ".mjs",
      ]);
      html_cycle_code(
        root,
        "using `" +
          run_git.name +
          ".mjs` , anytime a `function` is ran from the command-line that updates files , then git can be automatically updated",
      );
    },
  };
}
