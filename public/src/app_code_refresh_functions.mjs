import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { app_code_refresh_function } from "./app_code_refresh_function.mjs";
import { app_code_files_get } from "./app_code_files_get.mjs";
import { html_condition_letters_numbers_underscores_spaces } from "./html_condition_letters_numbers_underscores_spaces.mjs";
import { html_input_validated_on_input_lambda_initial } from "./html_input_validated_on_input_lambda_initial.mjs";
import { html_input_validated } from "./html_input_validated.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_first } from "./list_first.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button_width_full_click } from "./html_button_width_full_click.mjs";
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
import { function_path_to_name } from "./function_path_to_name.mjs";
import { list_map } from "./list_map.mjs";
import { object_properties } from "./object_properties.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_size } from "./string_size.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_get } from "./list_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { list_size_1 } from "./list_size_1.mjs";
export async function app_code_refresh_functions(context) {
  await html_load(async () => {
    let root = app_code_screen_set(
      context,
      fn_name("app_code_refresh_functions"),
    );
    app_code_button_menu_app(context);
    html_cycle_p(
      root,
      [noop, html_style_bold],
      'Choose a function. To find a function, type in letters in the order they appear in the function name. For example, "`oo`" would match "t`o`ns_`o`f" and "`o`pti`o`ns". To match in any order, separate by spaces.',
    );
    let st = html_input_validated(root, "Search query", [
      html_condition_letters_numbers_underscores_spaces(),
    ]);
    html_focus(st);
    let results = html_div(root);
    let files = await app_code_files_get();
    let file_paths = object_properties(files);
    let mapped2 = list_map(file_paths, function_path_to_name);
    html_input_validated_on_input_lambda_initial(st, (valid) => {
      html_clear(results);
      if (!valid) {
        return;
      }
      let value = html_value_get(st);
      let split = string_split_space(value);
      let v_lists = list_map(split, string_split_empty);
      if (list_size_1(v_lists) && list_empty_is(list_first(v_lists))) {
        v_lists = [];
      }
      let regexes = list_map(v_lists, (v_list) => {
        let copy = list_copy(v_list);
        let regex_list = list_between_surround(copy, ".*");
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
      if (list_empty_is(taken)) {
        html_p_text(results, "No functions found for search query");
      } else {
        each(taken, (t) => {
          let b = html_button_width_full_click(results, async () => {
            storage_local_set_context(context, "function_selected", t);
            await app_code_refresh_function(context);
          });
          let t_list = string_split_empty(t);
          let mapped = list_map(t_list, (symbol) => ({
            symbol,
            highlighted: false,
          }));
          each(v_lists, (v_list) => {
            let index = 0;
            each(v_list, (vi) => {
              let m;
              while (true) {
                m = list_get(mapped, index);
                if (object_property_get(m, "symbol") === vi) {
                  break;
                }
                index++;
              }
              object_property_set(m, "highlighted", true);
              index++;
            });
          });
          each(mapped, (m) => {
            let s = html_span_text(b, object_property_get(m, "symbol"));
            if (object_property_get(m, "highlighted") === true) {
              html_style_bold(s);
              html_style_background_color(s, "yellow");
            }
          });
        });
      }
    });
  });
}
