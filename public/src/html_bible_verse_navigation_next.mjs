import { bible_chapter_unpadded } from "./bible_chapter_unpadded.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_next } from "./list_next.mjs";
import { list_first } from "./list_first.mjs";
import { list_find_property_next_property } from "./list_find_property_next_property.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { app_verses_generic } from "./app_verses_generic.mjs";
import { list_find_property } from "./list_find_property.mjs";
export async function html_bible_verse_navigation_next(
  app_fn,
  book_code,
  chapter,
  verse_number,
  on_verse_next,
  context,
  on_chapter_next,
) {
  chapter = bible_chapter_unpadded(chapter);
  let verses = await app_verses_generic(app_fn, book_code, chapter);
  let verse = list_find_property(verses, "verse_number", verse_number);
  if (list_last_is(verses, verse)) {
    await chapter_next_go();
  } else {
    let verse_number_next = list_find_property_next_property(
      verses,
      "verse_number",
      verse_number,
    );
    await on_verse_next(book_code, chapter, verse_number_next);
  }
  async function chapter_next_go() {
    on_chapter_next();
    let { books } = context;
    let book = list_find_property(books, "book_code", book_code);
    let { chapters } = book;
    let chapter_next, book_next_code, book_next_book;
    if (list_last_is(chapters, chapter)) {
      if (list_last_is(books, book)) {
        book_next_book = list_first(books);
      } else {
        book_next_book = list_next(books, book);
      }
      book_next_code = object_property_get(book_next_book, "book_code");
      let { chapters } = book_next_book;
      chapter_next = list_first(chapters);
    } else {
      book_next_code = book_code;
      chapter_next = list_next(chapters, chapter);
    }
    let verses_next = await app_verses_generic(app_fn, book_code, chapter);
    await on_verse_next(
      book_next_code,
      chapter_next,
      object_property_get(list_first(verses_next), "verse_number"),
    );
  }
}
