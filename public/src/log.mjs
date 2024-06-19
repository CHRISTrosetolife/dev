import { log_logs } from "./log_logs.mjs";
import { list_add } from "./list_add.mjs";
export function log(message) {
  let logs = log_logs();
  list_add(logs, message);
  console.log(message);
}
