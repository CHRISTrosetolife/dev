import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { bible_interlinear_each_token } from "./bible_interlinear_each_token.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export async function bible_interlinear_strongs_generic(books_get) {
  let books = await books_get();
  let strongs = list_adder_unique((la) => {
    bible_interlinear_each_token(books, lambda);
    function lambda(token) {
      if (false) {
        la(token.strong);
      }
    }
  });
  list_sort_string(strongs, identity);
  return strongs;
}
