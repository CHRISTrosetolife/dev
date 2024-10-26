import { each } from "./each.mjs";
export function bible_interlinear_each_chapter(books, chapter_each) {
  each(books, (book) => {
    each(book.chapters, (chapter) => {
      chapter_each(chapter);
    });
  });
}
