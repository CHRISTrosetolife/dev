import { html_button } from "./html_button.mjs";
import { html_button_previous_text } from "./html_button_previous_text.mjs";
import { html_bible_verse_navigation_next } from "./html_bible_verse_navigation_next.mjs";
import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
import { bible_book_chapter_text } from "./bible_book_chapter_text.mjs";
import { html_button_next_text } from "./html_button_next_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_previous } from "./list_previous.mjs";
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
  root,
) {
  let verses = await app_verses_generic(context, app_fn, book_code, chapter);
  let verse = list_find_property(verses, "verse_number", verse_number);
  let previous;
  if (previous_first) {
    previous_create();
  }
  let next = html_button(
    root,
    string_combine_multiple([html_button_next_text(), " verse"]),
    verse_next,
  );
  if (!previous_first) {
    previous_create();
  }
  function previous_create() {
    previous = html_button(
      root,
      string_combine_multiple([html_button_previous_text(), " verse"]),
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
  }
  async function verse_next() {
    await html_bible_verse_navigation_next(
      app_fn,
      book_code,
      chapter,
      verse_number,
      (book_code, chapter, verse_number_next) =>
        verse_refresh(context, book_code, chapter, verse_number_next),
      context,
      on_chapter_next,
    );
  }
  return {
    previous,
    next,
    verse_next,
  };
  async function on_chapter_next() {
    let chapter_text = bible_book_chapter_text(book_code, chapter);
    await clipboard_copy_web(
      string_combine_multiple([chapter_text, ": Finished ", copy_message]),
    );
  }
}
