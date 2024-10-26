import { bible_interlinear_each_chapter } from "./bible_interlinear_each_chapter.mjs";
import { each } from "./each.mjs";
export function bible_interlinear_each_token(new_testament_books, lambda) {
  bible_interlinear_each_chapter(new_testament_books, chapter_each);
  function chapter_each(chapter) {
    each(chapter.verses, (verse) => {
      each(verse.tokens, (token) => {
        lambda(token);
      });
    });
  }
}
