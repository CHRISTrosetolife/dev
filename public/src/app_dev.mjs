import { each } from "./each.mjs";
import { functions_list } from "./functions_list.mjs";
import { global_files_initialize } from "./global_files_initialize.mjs";
import { html_button_view_sorce } from "./html_button_view_sorce.mjs";
import { html_spacer_vertical_2 } from "./html_spacer_vertical_2.mjs";
import { list_map } from "./list_map.mjs";
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
import { function_name_to_path } from "./function_name_to_path.mjs";
import { function_import } from "./function_import.mjs";
export async function app_dev() {
  let files = global_files_initialize({});
  let fl = functions_list();
  each(fl, async (f) => {
    let fp = function_name_to_path(f);
    await function_import(f);
  });
  let root = html_style_default_initialize();
  let screens_functions = app_dev_screens();
  let screens = list_map(screens_functions, (s) => s());
  home();
  await screen(list_index_last(screens));
  function home() {
    html_clear_scroll_top(root);
    each_index(screens, (s, index) => {
      let b = html_button_width_full_text_click(
        root,
        "",
        async () => await screen(index),
      );
      html_span_text(b, string_combine(add_1(index), ". "));
      s.name(b);
    });
    html_button_view_sorce(root, app_dev.name);
  }
  async function screen(index) {
    html_clear_scroll_top(root);
    let s = list_get(screens, index);
    await s.screen(root);
    let s_function = list_get(screens_functions, index);
    html_buttons_next_previous(root, screen, index, list_index_last(screens));
    html_button_width_full_text_click_home(root, home);
    html_spacer_vertical_2(root);
    let name = s_function.name;
    html_button_view_sorce(root, name);
  }
}
