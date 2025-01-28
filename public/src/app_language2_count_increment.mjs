import { storage_local_increment } from "./storage_local_increment.mjs";
export function app_language2_count_increment(context) {
  let name = "count";
  storage_local_increment(context, name);
}
