import { object_property_set } from "./object_property_set.mjs";
import { file_html_parse } from "./file_html_parse.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
import { each_async } from "./each_async.mjs";
import { ceb_definition_wolff } from "./ceb_definition_wolff.mjs";
import { list_includes } from "./list_includes.mjs";
import { ceb_stem } from "./ceb_stem.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { ceb_bible_words_definitions_map_cache } from "./ceb_bible_words_definitions_map_cache.mjs";
import { assert_message } from "./assert_message.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function ceb_stem_test() {
  let letters = {};
  let keys = keyboard_keys();
  await each_async(keys, async (key) => {
    let key_upper = string_case_upper(key);
    let p = string_combine_multiple([
      "..\\phildict-master\\Data\\Wolff\\WCED-",
      key_upper,
      ".tei",
    ]);
    let parsed = await file_html_parse(p);
    object_property_set(letters, key, parsed);
  });
  let context = {
    letters,
  };
  ceb_definition_wolff(context);
  let map = await ceb_bible_words_definitions_map_cache();
  let removes = ["juda", "moises"];
  each_object(map, (stem, inputs) => {
    each(inputs, (input) => {
      if (list_includes(removes, input)) {
        return;
      }
      let choices = ceb_stem(input);
      assert_message(list_includes, [choices, stem], () => ({
        input,
        stem,
      }));
    });
  });
}
