import { log_logs } from "./log_logs.mjs";
import { list_add } from "./list_add.mjs";
import { global_get } from "./global_get.mjs";
export function log(message) {
  let g = global_get();
  let logs = log_logs(g);
  list_add(logs, message);
  console.log(message);
}
