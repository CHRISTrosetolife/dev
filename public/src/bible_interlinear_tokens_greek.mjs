import { log } from "./log.mjs";
import { bible_interlinear_each_token } from "./bible_interlinear_each_token.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export async function bible_interlinear_tokens_greek() {
  let new_testament_books = await bible_interlinear_cache_new();
  let strongs = list_adder_unique((la) => {
    bible_interlinear_each_token(new_testament_books, lambda);
    function lambda(token) {
      log({});
    }
  });
  list_sort_string(strongs, identity);
  return strongs;
}
