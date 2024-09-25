import { json_to } from "./json_to.mjs";
import { log } from "./log.mjs";
export function log_json_format(message) {
  log(json_to(message));
}
