import { app_preach_sermon_contents } from "./app_preach_sermon_contents.mjs";
import { html_button } from "./html_button.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { each } from "./each.mjs";
import { sermons_list } from "./sermons_list.mjs";
export function app_preach_main(root) {
  html_clear_scroll_top(root);
  let ss = sermons_list();
  each(ss, function (s) {
    html_button(root, s, async function () {
      html_clear_scroll_top(root);
      html_button_back(root, function () {
        let v = app_preach_main(root);
        return v;
      });
      await app_preach_sermon_contents(s, root);
      html_button_back(root, function () {
        let v2 = app_preach_main(root);
        return v2;
      });
    });
  });
}
