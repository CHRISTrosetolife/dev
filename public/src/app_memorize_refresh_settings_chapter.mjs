import { app_memorize_refresh_memorize } from "./app_memorize_refresh_memorize.mjs";
import { app_memorize_chapter_set } from "./app_memorize_chapter_set.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_memorize_settings_button_back } from "./app_memorize_settings_button_back.mjs";
import { app_record_book_generic } from "./app_record_book_generic.mjs";
export function app_memorize_refresh_settings_chapter(context) {
  let root = context;
  let { book_code } = context.save;
  app_record_book_generic(
    context,
    () => {
      app_memorize_settings_button_back(context);
      html_p_text(
        root,
        string_combine_multiple([
          "which chapter in ",
          book_code,
          " do you want to memorize from ?",
        ]),
      );
    },
    book_code,
    async (context, book_code, chapter) => {
      app_memorize_chapter_set(context, chapter);
      await app_memorize_refresh_memorize(context);
    },
  );
}
