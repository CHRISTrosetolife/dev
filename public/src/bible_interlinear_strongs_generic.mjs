import { list_sort_string_map } from "./list_sort_string_map.mjs";
import { integer_parse_try } from "./integer_parse_try.mjs";
import { identity } from "./identity.mjs";
import { bible_interlinear_each_token } from "./bible_interlinear_each_token.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { number_is } from "./number_is.mjs";
export async function bible_interlinear_strongs_generic(books_get) {
  let books = await books_get();
  let strongs = list_adder_unique((la) => {
    bible_interlinear_each_token(books, lambda);
    function lambda(token) {
      let s = token.strong;
      let p = integer_parse_try(s);
      if (number_is(p)) {
        la(s);
      }
    }
  });
  list_sort_string_map(strongs, identity);
  return strongs;
}
