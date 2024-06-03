import { object_properties } from "./object_properties.mjs";
import { log } from "./log.mjs";
import { equal } from "./equal.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_map } from "./list_map.mjs";
import { assert } from "./assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_length } from "./list_length.mjs";
import { list_first } from "./list_first.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_second } from "./list_second.mjs";
import { list_get } from "./list_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function bible_verses_parse(verses) {
  list_map(verses, (v) => {
    let { children } = v;
    log(object_properties(verses));
    assert(equal, [list_length(children), 3]);
    let first = list_first(children);
    let { data } = first;
    assert(equal, [data, " "]);
    let verse_number = html_parse_text(list_second(children));
    let right = list_get(children, 2);
    assert(equal, [right.type, "text"]);
    let right_text = object_property_get(children, "data");
    let s2 = string_split_space(right_text);
    let tokens = list_filter(s2, string_empty_not_is);
    return {
      verse_number,
      tokens,
    };
  });
}
