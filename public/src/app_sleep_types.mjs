import { app_sleep_sleeps } from "./app_sleep_sleeps.mjs";
import { app_sleep_sleep } from "./app_sleep_sleep.mjs";
import { app_sleep_wakeups } from "./app_sleep_wakeups.mjs";
import { app_sleep_woke_up } from "./app_sleep_woke_up.mjs";
export function app_sleep_types() {
  return [
    {
      label: app_sleep_woke_up(),
      list_name: app_sleep_wakeups(),
    },
    {
      label: app_sleep_sleep(),
      list_name: app_sleep_sleeps(),
    },
  ];
}
