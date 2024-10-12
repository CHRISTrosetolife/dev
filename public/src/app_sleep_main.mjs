import { app_sleep_delete_refresh } from "./app_sleep_delete_refresh.mjs";
import { app_sleep_sleeps } from "./app_sleep_sleeps.mjs";
import { app_sleep_wakeups } from "./app_sleep_wakeups.mjs";
import { app_sleep_sleep } from "./app_sleep_sleep.mjs";
import { app_sleep_woke_up } from "./app_sleep_woke_up.mjs";
import { app_sleep_manual_text } from "./app_sleep_manual_text.mjs";
import { app_sleep_manual } from "./app_sleep_manual.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_sleep_record } from "./app_sleep_record.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
import { html_div } from "./html_div.mjs";
export function app_sleep_main(context) {
  let root = html_clear_scroll_top_context(context);
  app_sleep_record(context, app_sleep_woke_up(), app_sleep_wakeups(), "");
  app_sleep_record(context, app_sleep_sleep(), app_sleep_sleeps(), "");
  html_button_width_full_text_click(root, app_sleep_manual_text(), () => {
    app_sleep_manual(context);
  });
  html_hr(root);
  let result = html_div(root);
  html_button_width_full_text_click(root, "delete", async () => {
    await app_sleep_delete_refresh(result);
  });
}
