import { html_on_keydown } from "./html_on_keydown.mjs";
import { html_on_remove } from "./html_on_remove.mjs";
import { app_memorize_on_keydown } from "./app_memorize_on_keydown.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { app_memorize_refresh_memorize } from "./app_memorize_refresh_memorize.mjs";
import { html_document_body } from "./html_document_body.mjs";
export async function app_memorize_frame(context) {
  await app_memorize_refresh_memorize(context);
  let component = html_document_body();
  html_on_keydown(component, on_keydown);
  async function on_keydown(e) {
    let { keyCode } = e;
    let c = String.fromCharCode(keyCode);
    let c_lower = string_case_lower(c);
    await app_memorize_on_keydown(context, c_lower);
  }
  context.cleanup = () => {
    html_on_remove(html_document_body(), type, on_keydown);
  };
}
