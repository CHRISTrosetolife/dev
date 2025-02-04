import { log } from "./log.mjs";
import { list_between_after } from "./list_between_after.mjs";
import { html_p_text } from "./html_p_text.mjs";
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
export async function app_code_refresh_functions(context) {
  await html_load(async () => {
    let root = html_clear_scroll_top_centered_context(context);
    html_button_back(root, async () => {
      await app_code_refresh_main(context);
    });
    html_p_text(
      root,
      'Choose a function. To find a function, type in letters in the order they appear in the function name. For example, "oo" would match "tons_of" and "options".',
    );
    let st = html_input_width_full_placeholder(root, "Search term");
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
      let regex_string = list_between_after(
        string_split_empty(html_value_get(st)),
        ".*",
      );
      log({
        regex_string,
      });
      let regex = new RegExp(regex_string, "i");
      let testString = "Hello, world!";
      let isMatch = regex.test(testString);
      let taken = list_take(mapped2, 20);
      each(taken, (t) => {
        html_button_width_full_text_click(root, t, () => {});
      });
    });
  });
}
