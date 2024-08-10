import { list_adder_unique } from "./list_adder_unique.mjs";
import { bible_interlinear_each_token } from "./bible_interlinear_each_token.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
export async function bible_interlinear_words_greek(books_get) {
  let books = await bible_interlinear_cache_new();
  return list_adder_unique((la) => {
    bible_interlinear_each_token(books, lambda);
    function lambda(token) {
      la(token.word);
    }
  });
}
