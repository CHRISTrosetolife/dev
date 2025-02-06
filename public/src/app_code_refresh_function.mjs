import { html_button_back } from "./html_button_back.mjs";
import { app_code_button_functions_search } from "./app_code_button_functions_search.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { html_code_string } from "./html_code_string.mjs";
import { html_code_keyword } from "./html_code_keyword.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { log } from "./log.mjs";
import { js_keyword_from } from "./js_keyword_from.mjs";
import { js_keyword_import } from "./js_keyword_import.mjs";
import { js_code_statement_end } from "./js_code_statement_end.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { assert } from "./assert.mjs";
import { each } from "./each.mjs";
import { js_parse } from "./js_parse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { app_code_files_get } from "./app_code_files_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_code_refresh_function(context) {
  await html_load(async () => {
    let root = app_code_screen_set(
      context,
      fn_name("app_code_refresh_function"),
    );
    html_button_width_full_text_click(root, "Menu", () => {
      let root = html_clear_scroll_top_centered_context(context);
      html_button_back();
      app_code_button_functions_search(context);
    });
    let files = await app_code_files_get();
    let function_selected = storage_local_get_context(
      context,
      "function_selected",
    );
    let path = function_name_to_path(function_selected);
    let contents = object_property_get(files, path);
    let p = js_parse(contents);
    let body = object_property_get(p, "body");
    each(body, (b) => {
      let section = html_div(root);
      html_style_monospace(section);
      let type = object_property_get(b, "type");
      if (type === "ImportDeclaration") {
        let source = object_property_get(b, "source");
        let type_source = object_property_get(source, "type");
        assert(equal, [type_source, "Literal"]);
        let value = object_property_get(source, "value");
        assert(string_starts_with, [value, folder_current_prefix()]);
        let specifiers = object_property_get(b, "specifiers");
        assert(list_size_1, [specifiers]);
        let s = list_first(specifiers);
        let imported = object_property_get(s, "imported");
        let name2 = object_property_get(imported, "name");
        let local = object_property_get(s, "local");
        let name = object_property_get(local, "name");
        assert(equal, [name, name2]);
        html_code_keyword(section, js_keyword_import());
        html_span_text(section, " { ");
        let f_name = html_span_text(section, name);
        html_style_font_color(f_name, "forestgreen");
        log({
          local,
        });
        html_span_text(section, string_combine_multiple([" } "]));
        html_code_keyword(section, js_keyword_from());
        html_span_text(section, " ");
        html_code_string(section, value);
        html_span_text(section, js_code_statement_end());
      }
    });
  });
}
