import { html_button } from "./html_button.mjs";
import { bible_book_chapter_text } from "./bible_book_chapter_text.mjs";
import { html_p_text_centered } from "./html_p_text_centered.mjs";
import { object_replace } from "./object_replace.mjs";
import { app_record } from "./app_record.mjs";
import { app_save_change } from "./app_save_change.mjs";
import { app_record_chapter_buttons } from "./app_record_chapter_buttons.mjs";
import { app_record_verses } from "./app_record_verses.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { each } from "./each.mjs";
export async function app_record_chapter(
  context,
  book_code,
  chapter,
  on_verse,
) {
  await app_save_change(app_record, (save) =>
    object_replace(save, {
      book: book_code,
      chapter,
    }),
  );
  let { root } = context;
  let verses = await app_record_verses(context, book_code, chapter);
  app_record_chapter_buttons(context, book_code, on_verse);
  html_p_text_centered(root, bible_book_chapter_text(book_code, chapter));
  each(verses, (verse) => {
    let { tokens, verse_number } = verse;
    let p = html_button(root, "", async () => {
      await on_verse(context, book_code, chapter, verse_number);
    });
    let vn = html_span_text(p, verse_number);
    html_style_bold(vn);
    html_span_text(p, " ");
    html_span_text(p, list_join_space(tokens));
  });
}
