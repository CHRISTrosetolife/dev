import { ceb_stem } from "./ceb_stem.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { ceb_bible_words_definitions_map_cache } from "./ceb_bible_words_definitions_map_cache.mjs";
import { assert_message } from "./assert_message.mjs";
export async function ceb_stem_test() {
  let map = await ceb_bible_words_definitions_map_cache();
  each_object(object, (stem, inputs) => {
    each(inputs, (input) => {
      assert_message(equal, [ceb_stem(input), stem], () => ({
        input,
        stem,
      }));
    });
  });
}
