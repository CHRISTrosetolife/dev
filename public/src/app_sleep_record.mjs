import { grace_good_generic_copy } from "./grace_good_generic_copy.mjs";
import { app_sleep_save } from "./app_sleep_save.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_sleep_today_download } from "./app_sleep_today_download.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_element } from "./html_element.mjs";
export function app_sleep_record(context, button_text, list_name, message) {
  let { root } = context;
  let result;
  html_button_width_full_text_click(root, button_text, async () => {
    let { today, now, month_path, data } = await app_sleep_today_download();
    await app_sleep_save(today, list_name, now, month_path, data, result);
    grace_good_generic_copy(message);
  });
  result = html_element(root, "pre");
  html_hr(root);
}
