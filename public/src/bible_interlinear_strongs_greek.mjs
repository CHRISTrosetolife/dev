import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { list_take_reverse } from "./list_take_reverse.mjs";
import { bible_interlinear_cache } from "./bible_interlinear_cache.mjs";
export async function bible_interlinear_strongs_greek() {
  let books = await bible_interlinear_cache();
  let new_testament_books = list_take_reverse(books, 27);
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
