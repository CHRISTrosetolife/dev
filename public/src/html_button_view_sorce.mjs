import { html_button } from "./html_button.mjs";
import { window_open } from "./window_open.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
export function html_button_view_sorce(root, name) {
  let url = function_name_to_url_github(name);
  let text = "💻 view the source of this screen";
  html_button(root, text, function () {
    window_open(url);
  });
}
