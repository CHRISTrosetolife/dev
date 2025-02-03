import { global_files_set } from "./global_files_set.mjs";
import { html_button_home } from "./html_button_home.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { fn_name } from "./fn_name.mjs";
import { each } from "./each.mjs";
import { http_get } from "./http_get.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { functions_list } from "./functions_list.mjs";
import { html_button_view_sorce } from "./html_button_view_sorce.mjs";
import { html_spacer_vertical_2 } from "./html_spacer_vertical_2.mjs";
import { list_map } from "./list_map.mjs";
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
import { object_property_set } from "./object_property_set.mjs";
import { data_path } from "./data_path.mjs";
import { data_file_name } from "./data_file_name.mjs";
export async function app_dev() {
  let root = html_style_default_initialize();
  await html_scripts_load(root, [
    "axios",
    "acorn",
    "astring",
    "prettier_standalone",
    "prettier_parser_babel",
  ]);
  let { files } = global_files_set({});
  let d = await http_get(data_file_name());
  await file_write_json(data_path(), d);
  let fl = functions_list();
  each(fl, (f) => {
    let fp = function_name_to_path(f);
    object_property_set(files, fp, "");
  });
  let screens_functions = app_dev_screens();
  let screens = list_map(screens_functions, (s) => s());
  home();
  if (0) {
    await screen(list_index_last(screens));
  }
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
    html_button_view_sorce(root, fn_name("app_dev"));
  }
  async function screen(index) {
    html_clear_scroll_top(root);
    let s = list_get(screens, index);
    await s.screen(root);
    let s_function = list_get(screens_functions, index);
    html_buttons_next_previous(root, screen, index, list_index_last(screens));
    html_button_home(root, home);
    html_spacer_vertical_2(root);
    let name = s_function.name;
    html_button_view_sorce(root, name);
  }
}
