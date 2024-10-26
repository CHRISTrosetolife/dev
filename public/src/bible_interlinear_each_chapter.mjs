import { each } from "./each.mjs";
export function bible_interlinear_each_chapter(
  new_testament_books,
  chapter_each,
) {
  each(new_testament_books, (book) => {
    each(book.chapters, (chapter) => {
      chapter_each(chapter);
    });
  });
}
