import { storage_local_exists } from "./storage_local_exists.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { string_get } from "./string_get.mjs";
import { each_index } from "./each_index.mjs";
import { html_button_width_full } from "./html_button_width_full.mjs";
import { each } from "./each.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
import { string_regex_match } from "./string_regex_match.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { list_join } from "./list_join.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_on_input_value } from "./html_on_input_value.mjs";
import { html_div } from "./html_div.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { function_names } from "./function_names.mjs";
import { function_run_remote } from "./function_run_remote.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { html_list } from "./html_list.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { app_code } from "./app_code.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
export async function app_code_refresh(root) {
  html_clear_scroll_top_centered(root);
  storage_local_exists();
  let save = storage_local_get(app_code, "save");
  if (object_property_exists(save, "function")) {
    if (object_property_exists(save, "imports")) {
      let imports = js_imports_existing(ast);
      html_button_width_full_text_click_back(root, async () => {
        object_property_delete(save, "imports");
        storage_local_set(app_code, "save", save);
        await app_code_refresh(root);
      });
      html_list(root, imports);
    } else {
      let name = object_property_get(save, "function");
      let p = function_name_to_path(name);
      let ast = await file_js_parse(p);
      html_button_width_full_text(root, "imports", async () => {
        object_property_set(save, "imports", true);
        storage_local_set(app_code, "save", save);
        await app_code_refresh(root);
      });
      let d = js_declaration_single(ast);
      html_div_text(root, js_unparse(d));
    }
  } else {
    let ns = await function_run_remote(function_names.name, []);
    let input = html_input_width_full_focus(root);
    let results = html_div(root);
    html_on_input_value(input, app_code_search_refresh);
    app_code_search_refresh();
    function app_code_search_refresh(v) {
      html_clear(results);
      if (undefined_is(v)) {
        v = "";
      }
      let letters = string_split_empty(v);
      let joined = list_join(letters, ".*");
      let filtered;
      if (string_empty_is(v)) {
        filtered = ns;
      } else {
        filtered = list_filter(ns, (n) => {
          return string_regex_match(n, joined);
        });
      }
      let taken = list_take_soft(filtered, 50);
      each(taken, (item) => {
        let d = html_button_width_full(results);
        let letters_index = 0;
        each_index(item, (c, i) => {
          if (c === string_get(letters, letters_index)) {
          }
        });
        html_inner_set(d, item);
      });
    }
  }
}
