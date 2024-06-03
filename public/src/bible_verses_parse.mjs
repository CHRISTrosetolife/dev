import { object_property_get_or } from "./object_property_get_or.mjs";
import { log } from "./log.mjs";
import { equal } from "./equal.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { assert } from "./assert.mjs";
import { list_length } from "./list_length.mjs";
import { list_first } from "./list_first.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_get } from "./list_get.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function bible_verses_parse(verses) {
  list_adder((la) =>
    each(verses, (v) => {
      let { children } = v;
      let verse_number, tokens;
      each(children, (c) => {
        let { attribs } = c;
        if (object_property_get_or(attribs, "class", "") === "verse") {
          verse_number = html_parse_text(c);
          tokens = [];
          return;
        }
        if (undefined_not_is(verse_number)) {
          if (c.type === "text") {
            list_add_multiple(tokens);
          }
        }
      });
      assert(equal, [list_length(children), 3]);
      let first = list_first(children);
      let { data } = first;
      assert(equal, [data, " "]);
      let right = list_get(children, 2);
      assert(equal, [right.type, "text"]);
      let s2 = string_split_space(right_text);
      let result = {
        verse_number,
        tokens,
      };
      log({
        result,
      });
      return result;
    }),
  );
}
