import { list_map } from "./list_map.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
import { html_button_width_full_text_click_home } from "./html_button_width_full_text_click_home.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { app_dev_screens } from "./app_dev_screens.mjs";
import { each_index } from "./each_index.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { string_combine } from "./string_combine.mjs";
import { add_1 } from "./add_1.mjs";
export function app_dev() {
  let root = html_style_default_initialize();
  let screens_functions = app_dev_screens();
  let screens = list_map(screens_functions, (s) => s());
  home();
  screen(list_index_last(screens));
  function home() {
    html_clear_scroll_top(root);
    each_index(screens, (s, index) => {
      let b = html_button_width_full_text_click(root, "", () => screen(index));
      html_span_text(b, string_combine(add_1(index), ". "));
      s.name(b);
    });
  }
  function screen(index) {
    html_clear_scroll_top(root);
    let s = list_get(screens, index);
    s.screen(root);
    let s_function = list_get(screens_functions, index);
    let url = function_name_to_url_github(s_function.name);
    html_button_width_full_text_click(
      root,
      "💻 view the source of this screen",
      () => window.open(url),
    );
    html_buttons_next_previous(root, screen, index, list_index_last(screens));
    html_button_width_full_text_click_home(root, home);
  }
}
