import { storage_local_increment } from "./storage_local_increment.mjs";
export function app_language_2_count_increment(context) {
  let { app_fn } = context;
  storage_local_increment(app_fn, "count");
}
