import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
export async function app_record() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  let { books } = await bible_engbsb_storage_http_get("books");
  each(books, (book) => {
    let { book_code } = book;
    html_button_text_click(root, book_code, () => {
      html_clear_scroll_top(root);
      each(book.chapters, (chapter) => {
        html_button_text_click(root, chapter, async () => {
          let chapter_code = string_combine_multiple([book_code, chapter]);
          let verses = await bible_engbsb_storage_http_get(chapter_code);
          html_clear_scroll_top(root);
          each(list, (item) => {});
        });
      });
    });
  });
}
