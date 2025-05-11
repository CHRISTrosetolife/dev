import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { string_split } from "./string_split.mjs";
import { string_replace_pad } from "./string_replace_pad.mjs";
import { integer_parse_roman } from "./integer_parse_roman.mjs";
import { integer_parse_try } from "./integer_parse_try.mjs";
import { html_parse_class_is } from "./html_parse_class_is.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { number_is } from "./number_is.mjs";
import { string_to } from "./string_to.mjs";
export function bible_verses_parse(verses) {
  let result = list_adder(function (la) {
    let verse_number = "0";
    let tokens;
    verse_next();
    each(verses, function (v) {
      bible_verses_parse_text(v, verse_number, tokens);
      let { children } = v;
      each(children, function (c) {
        if (c.type === "tag") {
          if (html_parse_class_is(c, "verse")) {
            verse_number = html_parse_text(c);
            verse_number = string_trim_whitespace(verse_number);
            let verse_number_parsed = integer_parse_try(verse_number);
            if (!number_is(verse_number_parsed)) {
              verse_number = integer_parse_roman(verse_number);
              verse_number = string_to(verse_number);
            }
            verse_next();
            return;
          }
        }
        bible_verses_parse_text(c, verse_number, tokens);
      });
    });
    function verse_next() {
      tokens = [];
      la({
        verse_number,
        tokens,
      });
    }
  });
  let filtered = list_filter(result, function (r) {
    return list_empty_not_is(r);
  });
  return result;
  function bible_verses_parse_text(c, verse_number, tokens) {
    if (c.type === "text" || html_parse_class_is(c, "wj")) {
      if (undefined_not_is(verse_number)) {
        let text = html_parse_text(c);
        let n = string_trim_whitespace(string_whitespace_normalize(text));
        let dash = "—";
        let r = string_replace_pad(n, dash);
        let s = string_split(r, " ");
        s = list_filter(s, string_empty_not_is);
        list_add_multiple(tokens, s);
      }
    }
  }
}
