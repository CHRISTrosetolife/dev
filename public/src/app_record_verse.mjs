import { list_join_space } from "./list_join_space.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { app_record_verses } from "./app_record_verses.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export async function app_record_verse(
  context,
  book_code,
  chapter,
  verse_number,
) {
  html_clear_scroll_top(root);
  let { root } = context;
  let verses = await app_record_verses(context, book_code, chapter);
  let verse = list_find_property(verses, "verse_number", verse_number);
  let { tokens } = verse;
  let vn = html_span_text(root, verse_number);
  html_style_bold(vn);
  html_span_text(root, " ");
  html_span_text(root, list_join_space(tokens));
}
