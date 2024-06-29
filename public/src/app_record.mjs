import { html_style_bold } from "./html_style_bold.mjs";
import { html_p } from "./html_p.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_span_text } from "./html_span_text.mjs";
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
          each(verses, (verse) => {
            let { tokens, verse_number } = verse;
            let p = html_p(root);
            let vn = html_span_text(p, verse_number);
            html_style_bold(vn);
            html_span_text(p, " ");
            html_span_text(p, list_join_space(tokens));
          });
        });
      });
    });
  });
}
