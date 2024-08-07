import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export async function bible_interlinear_strongs_greek() {
  let new_testament_books = await bible_interlinear_cache_new();
  let strongs = list_adder_unique((la) => {
    each(new_testament_books, (book) => {
      each(book.chapters, (chapter) => {
        each(chapter.verses, (verse) => {
          each(verse.tokens, (token) => {
            la(token.strong);
          });
        });
      });
    });
  });
  list_sort_string(strongs, identity);
  return strongs;
}
