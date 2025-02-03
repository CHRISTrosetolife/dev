import { string_digit_is } from "./string_digit_is.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { json_from } from "./json_from.mjs";
import { list_intersect_multiple } from "./list_intersect_multiple.mjs";
import { json_to } from "./json_to.mjs";
import { list_filter } from "./list_filter.mjs";
import { each_object } from "./each_object.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_wait } from "./list_wait.mjs";
import { list_map } from "./list_map.mjs";
import { bible_search_symbols_map } from "./bible_search_symbols_map.mjs";
export async function bible_search_results(split, word_to_results, filter) {
  let f = list_filter(split, string_empty_not_is);
  let mapped = bible_search_symbols_map(f);
  let results_promises = list_map(mapped, async (m) => {
    return await word_to_results(m);
  });
  let results = await list_wait(results_promises);
  let mapped2 = list_map(results, (word) =>
    list_adder((la) => {
      each_object(word, (chapter_code, chapter) => {
        each_object(chapter, (verse_number, versions) => {
          la({
            chapter_code,
            verse_number,
            versions,
          });
        });
      });
    }),
  );
  let mapped6 = list_map(mapped2, (word) =>
    list_filter(word, (results) => {
      let { chapter_code, verse_number } = results;
      return filter(chapter_code, verse_number);
    }),
  );
  let mapped4 = list_map(mapped6, (word) =>
    list_map(word, (results) => {
      let { chapter_code, verse_number } = results;
      return json_to({
        chapter_code,
        verse_number,
      });
    }),
  );
  let intersect = list_intersect_multiple(mapped4);
  let mapped5 = list_map(intersect, json_from);
  let filtered = list_filter(mapped5, (i) => {
    return string_digit_is(object_property_get(i, "verse_number"));
  });
  return filtered;
}
