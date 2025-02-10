import { app_el_alphabet_string } from "./app_el_alphabet_string.mjs";
import { each_index } from "./each_index.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { assert } from "./assert.mjs";
import { list_first } from "./list_first.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_multiple } from "./string_split_multiple.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { list_second } from "./list_second.mjs";
export function app_el_upload() {
  let alphabet_string = app_el_alphabet_string();
  let split = string_split_multiple(alphabet_string, ["\n", "\t"]);
  let mapped = list_map(split, string_trim_whitespace);
  let filtered = list_filter(mapped, string_empty_not_is);
  let chunks = list_chunk(filtered, 2);
  let pairs = list_adder((la) => {
    each(chunks, (chunk) => {
      assert(list_size_2, [chunk]);
      let letters = list_first(chunk);
      let name_letter = list_second(chunk);
      let split_letters = string_split_empty(letters);
      let { first: uppercase, remaining: lowercases } =
        list_first_remaining(split_letters);
    });
    la([uppercase, string_combine_multiple([name_letter, " uppercase"])]);
    each_index(lowercases, (lowercase, index) => {
      la([
        lowercase,
        string_combine_multiple([
          name_letter,
          " lowercase",
          index === 2 ? " ending" : "",
        ]),
      ]);
    });
  });
  return pairs;
}
