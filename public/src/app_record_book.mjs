import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { object_replace } from "./object_replace.mjs";
import { app_record } from "./app_record.mjs";
import { app_save_change } from "./app_save_change.mjs";
import { app_record_home_button } from "./app_record_home_button.mjs";
import { app_record_book_generic } from "./app_record_book_generic.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
export async function app_record_book(context, book_code) {
  await app_save_change(app_record, (save) =>
    object_replace(save, {
      book: book_code,
    }),
  );
  let lambda_top = () => {
    app_record_home_button(context);
    let { root } = context;
    let b = html_p_text(root, string_combine_multiple([book_code]));
    html_style_centered(b);
  };
  let app_record_book_on_click = app_record_chapter;
  app_record_book_generic(
    context,
    lambda_top,
    book_code,
    app_record_book_on_click,
  );
}
