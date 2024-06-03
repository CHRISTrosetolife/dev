import { equal } from "./equal.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { number_is } from "./number_is.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { list_last } from "./list_last.mjs";
import { each_pairs } from "./each_pairs.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_map } from "./list_map.mjs";
import { string_split } from "./string_split.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { assert } from "./assert.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_take } from "./list_take.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_length } from "./list_length.mjs";
import { list_first } from "./list_first.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_second } from "./list_second.mjs";
import { list_get } from "./list_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function bible_verses_parse(element) {
  let { children } = element;
  assert(equal, [list_length(children), 3]);
  let first = list_first(children);
  let { data } = first;
  assert(equal, [data, " "]);
  let left = html_parse_text(list_second(children));
  let right = list_get(children, 2);
  assert(equal, [right.type, "text"]);
  let right_text = object_property_get(children, "data");
  let split = string_split(text, "&#160;");
  let mapped = list_map(split, (s) => {
    let s2 = string_split_space(s);
    return list_filter(s2, string_empty_not_is);
  });
  let last = list_last(mapped);
  return list_adder((la) => {
    each_pairs(mapped, (previous, current) => {
      let { verse_number } = verse_get(previous);
      let { tokens } = verse_get(current);
      if (equal(current, last)) {
        tokens = current;
      }
      la({
        verse_number,
        tokens,
      });
    });
  });
  function verse_get(verse_tokens) {
    let verse_number = list_last(verse_tokens);
    let parsed = integer_parse(verse_number);
    assert(number_is, [parsed]);
    let less_1 = list_index_last(verse_tokens);
    let tokens = list_take(verse_tokens, less_1);
    return {
      verse_number,
      tokens,
    };
  }
}
