import { list_next } from "./list_next.mjs";
import { list_first } from "./list_first.mjs";
import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
import { bible_book_chapter_text } from "./bible_book_chapter_text.mjs";
import { list_find_property_next_property } from "./list_find_property_next_property.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { html_button_next_text } from "./html_button_next_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_previous } from "./list_previous.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { app_verses_generic } from "./app_verses_generic.mjs";
export async function html_bible_verse_navigation(
  app_fn,
  verse_refresh,
  context,
  book_code,
  chapter,
  verse_number,
  copy_message,
  previous_first,
) {
  let { root } = context;
  let verses = await app_verses_generic(app_fn, book_code, chapter);
  let verse = list_find_property(verses, "verse_number", verse_number);
  let previous = html_button_width_full_text_click(
    root,
    "⬅️ previous verse",
    async () => {
      let verse_previous = list_previous(verses, verse);
      await verse_refresh(
        context,
        book_code,
        chapter,
        object_property_get(verse_previous, "verse_number"),
      );
    },
  );
  let next = html_button_width_full_text_click(
    root,
    string_combine_multiple([html_button_next_text(), " verse"]),
    verse_next,
  );
  async function verse_next() {
    if (list_last_is(verses, verse)) {
      await chapter_next_go();
    } else {
      let verse_number_next = list_find_property_next_property(
        verses,
        "verse_number",
        verse_number,
      );
      await verse_refresh(context, book_code, chapter, verse_number_next);
    }
  }
  async function chapter_next_go() {
    let chapter_text = bible_book_chapter_text(book_code, chapter);
    clipboard_copy_web(
      string_combine_multiple([chapter_text, ": Finished ", copy_message]),
    );
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
    await verse_refresh(
      context,
      book_next_code,
      chapter_next,
      object_property_get(list_first(verses_next), "verse_number"),
    );
  }
  return {
    previous,
    next,
    verse_next,
  };
}
