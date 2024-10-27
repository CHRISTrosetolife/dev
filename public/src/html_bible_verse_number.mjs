import { bible_book_name } from "./bible_book_name.mjs";
import { bible_reference } from "./bible_reference.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_bible_verse_number(
  root,
  book_code,
  chapter,
  verse_number,
) {
  let s = html_span_text(
    root,
    bible_reference(bible_book_name(book_code), chapter, verse_number),
  );
  return r;
}
