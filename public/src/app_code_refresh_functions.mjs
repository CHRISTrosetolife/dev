import { list_join_empty } from "./list_join_empty.mjs";
import { html_focus } from "./html_focus.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { noop } from "./noop.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { list_sort } from "./list_sort.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { regex_test } from "./regex_test.mjs";
import { log } from "./log.mjs";
import { list_between_after } from "./list_between_after.mjs";
import { each } from "./each.mjs";
import { list_take } from "./list_take.mjs";
import { html_load } from "./html_load.mjs";
import { global_files } from "./global_files.mjs";
import { global_get } from "./global_get.mjs";
import { object_property_initialize_get_async } from "./object_property_initialize_get_async.mjs";
import { app_code_refresh_main } from "./app_code_refresh_main.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { list_map } from "./list_map.mjs";
import { object_properties } from "./object_properties.mjs";
import { app_code_local_functions_path } from "./app_code_local_functions_path.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
import { html_on_input_initial } from "./html_on_input_initial.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_size } from "./string_size.mjs";
export async function app_code_refresh_functions(context) {
  await html_load(async () => {
    let root = html_clear_scroll_top_centered_context(context);
    html_button_back(root, async () => {
      await app_code_refresh_main(context);
    });
    html_cycle_p(
      root,
      [noop, html_style_bold],
      'Choose a function. To find a function, type in letters in the order they appear in the function name. For example, "`oo`" would match "t`o`ns_`o`f" and "`o`pti`o`ns".',
    );
    let st = html_input_width_full_placeholder(root, "Search term");
    html_focus(st);
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
      let regex_list = list_between_after(
        string_split_empty(html_value_get(st)),
        ".*",
      );
      let regex_string = list_join_empty(regex_list);
      log({
        regex_string,
      });
      let regex = new RegExp(regex_string, "i");
      let filtered = list_filter(mapped2, (m) => regex_test(regex, m));
      let taken = list_take(filtered, 20);
      list_sort_string(taken);
      list_sort(taken, string_size);
      each(taken, (t) => {
        html_button_width_full_text_click(root, t, () => {});
      });
    });
  });
}
