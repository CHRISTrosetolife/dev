import { list_find_property } from "./list_find_property.mjs";
import { app_record_verses } from "./app_record_verses.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { each } from "./each.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_record_chapter(context, book_code, chapter) {
  let { root } = context;
  let verses = await app_record_verses(context, book_code, chapter);
  html_clear_scroll_top(root);
  each(verses, (verse) => {
    let { tokens, verse_number } = verse;
    let p = html_button_width_full_text_click(root, "", async () => {
      let verses = await app_record_verses(context, book_code, chapter);
      verse = list_find_property(verses, "verse_number", verse_number);
      let vn = html_span_text(p, verse_number);
      html_style_bold(vn);
      html_span_text(p, " ");
      html_span_text(p, list_join_space(tokens));
    });
    let vn = html_span_text(p, verse_number);
    html_style_bold(vn);
    html_span_text(p, " ");
    html_span_text(p, list_join_space(tokens));
  });
}
