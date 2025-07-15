import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { log_logs } from "./log_logs.mjs";
import { list_add } from "./list_add.mjs";
export function log(message) {
  assert_arguments_length(arguments, 1);
  let logs = log_logs();
  list_add(logs, message);
  console.log(message);
}
