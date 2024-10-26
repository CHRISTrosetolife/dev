import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
export function bible_interlinear_each_chapter(books, chapter_each) {
  each(books, (book) => {
    each(book.chapters, (chapter) => {
      let book_name = object_property_get(book, "book_name");
      chapter_each(chapter, book_name);
    });
  });
}
