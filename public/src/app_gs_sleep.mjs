import { sleep } from "./sleep.mjs";
import { app_gs_sleep_time } from "./app_gs_sleep_time.mjs";
export async function app_gs_sleep() {
  let sleep_time = app_gs_sleep_time();
  await sleep(sleep_time);
}
