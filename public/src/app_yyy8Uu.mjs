import { storage_url } from "./storage_url.mjs";
import { http_get } from "./http_get.mjs";
import { yyy8Uu_storage_path } from "./yyy8Uu_storage_path.mjs";
import { html_hr } from "./html_hr.mjs";
import { add_1 } from "./add_1.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { json_to } from "./json_to.mjs";
import { range } from "./range.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_get } from "./list_get.mjs";
export async function app_yyy8Uu() {
  html_style_default_initialize();
  let root = html_document_body();
  await refresh_chapter(0);
  async function refresh_chapter(index) {
    html_clear_scroll_top(root);
    let file_path = yyy8Uu_storage_path(index);
    let chapter = await http_get(storage_url(file_path));
    let { english, latin } = chapter;
    let indices = range(english);
    for (let i of indices) {
        const l = list_get(latin, i);
        console.log({l})
        html_p_text(root, l)
        html_p_text(root, list_get(english, i))
    }
    html_hr(root);
    let button_next = html_button_width_full_text_click_next(
      root,
      async function next_on_click() {
        await refresh_chapter(add_1(index));
      },
    );
  }
}
