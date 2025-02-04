import { html_button_width_full_click } from "./html_button_width_full_click.mjs";
import { app_code_refresh_menu } from "./app_code_refresh_menu.mjs";
import { regex_new } from "./regex_new.mjs";
import { list_between_surround } from "./list_between_surround.mjs";
import { regex_test_multiple } from "./regex_test_multiple.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { html_div } from "./html_div.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { html_focus } from "./html_focus.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { noop } from "./noop.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { list_sort } from "./list_sort.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { each } from "./each.mjs";
import { html_load } from "./html_load.mjs";
import { global_files } from "./global_files.mjs";
import { global_get } from "./global_get.mjs";
import { object_property_initialize_get_async } from "./object_property_initialize_get_async.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { list_map } from "./list_map.mjs";
import { object_properties } from "./object_properties.mjs";
import { app_code_local_functions_path } from "./app_code_local_functions_path.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
import { html_on_input_initial } from "./html_on_input_initial.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_size } from "./string_size.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_p_text } from "./html_p_text.mjs";
export async function app_code_refresh_functions(context) {
  await html_load(async () => {
    let root = html_clear_scroll_top_centered_context(context);
    html_button_back(root, async () => {
      app_code_refresh_menu(context);
    });
    html_cycle_p(
      root,
      [noop, html_style_bold],
      'Choose a function. To find a function, type in letters in the order they appear in the function name. For example, "`oo`" would match "t`o`ns_`o`f" and "`o`pti`o`ns". To match in any order, separate by spaces.',
    );
    let st = html_input_width_full_placeholder(root, "Search query");
    html_focus(st);
    let results = html_div(root);
    let g = global_get();
    let files = await object_property_initialize_get_async(
      g,
      global_files(),
      async () => {
        return await http_storage_get(app_code_local_functions_path());
      },
    );
    let file_paths = object_properties(files);
    let mapped2 = list_map(file_paths, function_path_to_name);
    html_on_input_initial(st, () => {
      let value = html_value_get(st);
      let split = string_split_space(value);
      let v_lists = list_map(split, string_split_empty);
      let regexes = list_map(v_lists, (s) => {
        let v_list = string_split_empty(s);
        let regex_list = list_between_surround(v_list, ".*");
        let regex_string = list_join_empty(regex_list);
        let regex = regex_new(regex_string);
        return regex;
      });
      let filtered = list_filter(mapped2, (m) =>
        regex_test_multiple(regexes, m),
      );
      list_sort_string(filtered);
      list_sort(filtered, string_size);
      let taken = list_take_soft(filtered, 20);
      html_clear(results);
      if (list_empty_is(taken)) {
        html_p_text(results, "No functions found for search query");
      } else {
        each(taken, (t) => {
          let b = html_button_width_full_click(results, () => {});
          let t_list = string_split_empty(t);
          let mapped = list_map(t_list, (symbol) => ({
            symbol,
            highlighted: false,
          }));
          let pointer = 0;
          each(v_list, (vi) => {
            while (vi !== $lg) {}
          });
        });
      }
    });
  });
}
