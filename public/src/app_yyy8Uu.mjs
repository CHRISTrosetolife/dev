import { html_hr } from "./html_hr.mjs";
import { add_1 } from "./add_1.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_yyy8Uu() {
  html_style_default_initialize();
  let root = html_document_body();
  await refresh_chapter(0);
  async function refresh_chapter(index) {
    html_clear_scroll_top(root);
    let verses = await http_get(storage_url(file_path));
    html_hr(root);
    let button_next = html_button_width_full_text_click_next(
      root,
      async function next_on_click() {
        await refresh_chapter(add_1(index));
      },
    );
  }
}
