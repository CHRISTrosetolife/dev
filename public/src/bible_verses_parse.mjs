import { exit } from "./exit.mjs";
import { log } from "./log.mjs";
import { string_split_multiple } from "./string_split_multiple.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
export function bible_verses_parse(verses) {
  let result = list_adder((la) => {
    let verse_number, tokens;
    each(verses, (v) => {
      bible_verses_parse_text(v, verse_number, tokens);
      let { children } = v;
      each(children, (c) => {
        log(html_parse_text(c));
        if (c.type === "tag") {
          let { attribs } = c;
          if (object_property_get_or(attribs, "class", "") === "verse") {
            verse_number = html_parse_text(c);
            verse_number = string_trim_whitespace(verse_number);
            tokens = [];
            la({
              verse_number,
              tokens,
            });
            return;
          }
        }
        bible_verses_parse_text(c, verse_number, tokens);
      });
    });
  });
  exit();
  return result;
  function bible_verses_parse_text(c, verse_number, tokens) {
    if (c.type === "text") {
      if (undefined_not_is(verse_number)) {
        let n = string_trim_whitespace(string_whitespace_normalize(c.data));
        let s = string_split_multiple(n, [" ", "—"]);
        list_add_multiple(tokens, s);
      }
    }
  }
}
