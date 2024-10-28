import { bible_interlinear_chapter_each_token } from "./bible_interlinear_chapter_each_token.mjs";
import { bible_interlinear_each_chapter } from "./bible_interlinear_each_chapter.mjs";
export function bible_interlinear_each_token(books, lambda) {
  bible_interlinear_each_chapter(books, chapter_each);
  function chapter_each(chapter, book_name) {
    bible_interlinear_chapter_each_token(chapter, lambda);
  }
}
