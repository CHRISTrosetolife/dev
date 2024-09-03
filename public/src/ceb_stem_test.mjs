import { list_includes } from "./list_includes.mjs";
import { ceb_stem } from "./ceb_stem.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { ceb_bible_words_definitions_map_cache } from "./ceb_bible_words_definitions_map_cache.mjs";
import { assert_message } from "./assert_message.mjs";
export async function ceb_stem_test() {
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
