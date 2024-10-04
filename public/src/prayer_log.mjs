import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
export function prayer_log(prayer_body) {
  log(string_combine_multiple(["God ", prayer_body, " amen"]));
}
