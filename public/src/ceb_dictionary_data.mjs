import { xml_parse } from "./xml_parse.mjs";
import { file_read } from "./file_read.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { each_async } from "./each_async.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
import { global_function_initialize_async } from "./global_function_initialize_async.mjs";
export async function ceb_dictionary_data() {
  return await global_function_initialize_async(
    ceb_dictionary_data,
    async () => {
      let letters = {};
      let keys = keyboard_keys();
      let f = list_filter(keys, (k) => !string_includes("cefjoqvxz", k));
      await each_async(f, async (key) => {
        let key_upper = string_case_upper(key);
        let p = string_combine_multiple([
          "..\\phildict-master\\Data\\Wolff\\WCED-",
          key_upper,
          ".tei",
        ]);
        let input_string = await file_read(p);
        let parsed = await xml_parse(input_string);
        object_property_set(letters, key, parsed);
      });
      return letters;
    },
  );
}
