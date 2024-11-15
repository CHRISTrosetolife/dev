import { html_p_text_centered } from "./html_p_text_centered.mjs";
import { bible_book_name_text } from "./bible_book_name_text.mjs";
import { object_replace } from "./object_replace.mjs";
import { app_record } from "./app_record.mjs";
import { app_save_change } from "./app_save_change.mjs";
import { app_record_home_button } from "./app_record_home_button.mjs";
import { app_record_book_generic } from "./app_record_book_generic.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
export async function app_record_book(context, book_code, on_verse) {
  await app_save_change(app_record, (save) =>
    object_replace(save, {
      book: book_code,
    }),
  );
  let lambda_top = () => {
    app_record_home_button(context, on_verse);
    let { root } = context;
    html_p_text_centered(root, bible_book_name_text(book_code));
  };
  app_record_book_generic(
    context,
    lambda_top,
    book_code,
    async (context, book_code, chapter) =>
      await app_record_chapter(context, book_code, chapter, on_verse),
  );
}
