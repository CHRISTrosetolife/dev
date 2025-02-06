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
export async function app_code_refresh_function(context) {
  await html_load(async () => {
    let root = app_code_screen_set(
      context,
      fn_name("app_code_refresh_function"),
    );
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
        let local = object_property_get(s, "local");
        assert(equal, [imported, local]);
      }
    });
  });
}
