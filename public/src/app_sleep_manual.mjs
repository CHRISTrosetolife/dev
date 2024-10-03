import { app_sleep_manual_refresh } from "./app_sleep_manual_refresh.mjs";
import { date_now_parts } from "./date_now_parts.mjs";
export function app_sleep_manual(context) {
  let parts = date_now_parts();
  app_sleep_manual_refresh(context, parts);
}
