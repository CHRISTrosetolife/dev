import { function_read } from "./function_read.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_code_save_refresh_function_button } from "./app_code_save_refresh_function_button.mjs";
import { app_code_refresh_function_statement } from "./app_code_refresh_function_statement.mjs";
import { js_declaration_single_body } from "./js_declaration_single_body.mjs";
import { app_code_save_delete_refresh_button_back } from "./app_code_save_delete_refresh_button_back.mjs";
import { function_parse } from "./function_parse.mjs";
import { app_code_save_refresh } from "./app_code_save_refresh.mjs";
import { app_code_save_get } from "./app_code_save_get.mjs";
import { string_size } from "./string_size.mjs";
import { list_sort } from "./list_sort.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { string_get } from "./string_get.mjs";
import { each_index } from "./each_index.mjs";
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
import { html_list } from "./html_list.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_element } from "./html_element.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export async function app_code_refresh(root) {
  html_clear_scroll_top_centered(root);
  let save = app_code_save_get();
  if (object_property_exists(save, "function")) {
    let name = object_property_get(save, "function");
    let ast = await function_parse(name);
    if (object_property_exists(save, "imports")) {
      let imports = js_imports_existing(ast);
      app_code_save_delete_refresh_button_back(root, "imports");
      html_list(root, imports);
    } else if (object_property_exists(save, "source")) {
      app_code_save_delete_refresh_button_back(root, "source");
      let p = html_element(root, "pre");
      html_inner_set(p, await function_read(name));
    } else {
      app_code_save_delete_refresh_button_back(root, "function");
      html_button_width_full_text_click(root, "source", async () => {
        await app_code_save_refresh(root, (save) =>
          object_property_set(save, "source", true),
        );
      });
      html_button_width_full_text_click(root, "imports", async () => {
        await app_code_save_refresh(root, (save) =>
          object_property_set(save, "imports", true),
        );
      });
      let body = js_declaration_single_body(ast);
      html_div_text(root, name);
      each(body, (statement) => {
        html_hr(root);
        app_code_refresh_function_statement(root, root, statement, 0);
      });
    }
  } else {
    let ns = await function_names();
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
      list_sort(taken, string_size);
      each(taken, (function_name) => {
        app_code_save_refresh_function_button(results, root, function_name);
        let letters_index = 0;
        each_index(function_name, (c, i) => {
          if (c === string_get(letters, letters_index)) {
          }
        });
      });
    }
  }
}
