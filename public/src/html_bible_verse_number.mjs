import { bible_reference_name } from "./bible_reference_name.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_bible_verse_number(
  root,
  book_code,
  chapter,
  verse_number,
) {
  let vn = html_span_text(
    root,
    bible_reference_name(book_code, chapter, verse_number),
  );
  html_style_bold(vn);
  return vn;
}
