import { app_gs_sleep_time_walk } from "./app_gs_sleep_time_walk.mjs";
import { sleep } from "./sleep.mjs";
export async function app_gs_sleep() {
  let sleep_time = app_gs_sleep_time_walk();
  await sleep(sleep_time);
}
