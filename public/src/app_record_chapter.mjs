import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_record_home } from "./app_record_home.mjs";
import { app_record_home_button } from "./app_record_home_button.mjs";
import { app_record_verse } from "./app_record_verse.mjs";
import { app_record_verses } from "./app_record_verses.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { each } from "./each.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_record_chapter(context, book_code, chapter) {
  let { root } = context;
  let verses = await app_record_verses(book_code, chapter);
  html_clear_scroll_top(root);
  app_record_home_button(context);
  html_button_width_full_text_click(
    root,
    string_combine_multiple(["📖 "]),
    () => app_record_home(context),
  );
  each(verses, (verse) => {
    let { tokens, verse_number } = verse;
    let p = html_button_width_full_text_click(root, "", async () => {
      await app_record_verse(context, book_code, chapter, verse_number);
    });
    let vn = html_span_text(p, verse_number);
    html_style_bold(vn);
    html_span_text(p, " ");
    html_span_text(p, list_join_space(tokens));
  });
}
