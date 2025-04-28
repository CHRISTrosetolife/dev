import { html_button_window_open } from "./html_button_window_open.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
export function html_button_view_sorce(root, name) {
  let url = function_name_to_url_github(name);
  let text = "💻 view the source of this screen";
  html_button_window_open(root, text, url);
}
