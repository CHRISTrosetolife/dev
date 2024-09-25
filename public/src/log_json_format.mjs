import { json_format_to } from "./json_format_to.mjs";
import { log } from "./log.mjs";
export function log_json_format(message) {
  log(json_format_to(message));
}
