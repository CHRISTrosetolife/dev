import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { log } from "./log.mjs";
import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
export async function app_record() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  let books = await bible_engbsb_storage_http_get("books");
  each(books, (book) => {
    html_button_text_click();
  });
  log({
    books,
  });
}
