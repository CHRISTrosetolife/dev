import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { file_html_parse } from "./file_html_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { each_async } from "./each_async.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
import { global_function_initialize_async } from "./global_function_initialize_async.mjs";
export async function ceb_definition_wolff_context() {
  return await global_function_initialize_async(
    ceb_definition_wolff_context,
    async () => {
      let letters = {};
      let keys = keyboard_keys();
      let f = list_filter(keys, (k) => !string_includes("efoq", k));
      await each_async(f, async (key) => {
        let key_upper = string_case_upper(key);
        let p = string_combine_multiple([
          "..\\phildict-master\\Data\\Wolff\\WCED-",
          key_upper,
          ".tei",
        ]);
        let parsed = await file_html_parse(p);
        object_property_set(letters, key, parsed);
      });
      return {
        letters,
      };
    },
  );
}
