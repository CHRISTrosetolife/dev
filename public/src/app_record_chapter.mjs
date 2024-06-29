import { object_property_get_or_async } from "./object_property_get_or_async.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { each } from "./each.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
export async function app_record_chapter(context, book_code, chapter) {
  let { root } = context;
  let chapter_code = string_combine_multiple([book_code, chapter]);
  await object_property_get_or_async();
  if (object_property_exists_not(context, chapter_code)) {
    let verses = await bible_engbsb_storage_http_get(chapter_code);
    object_property_get_or;
  }
  html_clear_scroll_top(root);
  each(verses, (verse) => {
    let { tokens, verse_number } = verse;
    let p = html_button_width_full_text_click(root, "", () => {
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
