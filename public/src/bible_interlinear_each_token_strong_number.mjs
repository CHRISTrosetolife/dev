import { number_is } from "./number_is.mjs";
import { integer_parse_try } from "./integer_parse_try.mjs";
import { bible_interlinear_each_token } from "./bible_interlinear_each_token.mjs";
export function bible_interlinear_each_token_strong_number(books, la) {
  bible_interlinear_each_token(books, lambda);
  function lambda(token) {
    let s = token.strong;
    let p = integer_parse_try(s);
    if (number_is(p)) {
      la(s);
    }
  }
}
