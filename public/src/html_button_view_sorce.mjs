import { window_open } from "./window_open.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
export function html_button_view_sorce(root, name) {
  let url = function_name_to_url_github(name);
  html_button_width_full_text_click(
    root,
    "💻 view the source of this screen",
    () => window_open(url),
  );
}
