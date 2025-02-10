import { bible_interlinear_each_token_strong_number } from "./bible_interlinear_each_token_strong_number.mjs";
import { list_sort_string_map } from "./list_sort_string_map.mjs";
import { identity } from "./identity.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export async function bible_interlinear_strongs_generic(books_get) {
  let books = await books_get();
  let strongs = list_adder_unique((la) => {
    bible_interlinear_each_token_strong_number(books, la);
  });
  list_sort_string_map(strongs, identity);
  return strongs;
}
