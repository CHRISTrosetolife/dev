import { app_sleep_record } from "./app_sleep_record.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
export function app_sleep_main(context) {
  let root = html_clear_scroll_top_context(context);
  app_sleep_record(context, "woke up", "wakeups");
  html_hr(root);
  app_sleep_record(context, "🛌 sleep", "sleeps");
}
