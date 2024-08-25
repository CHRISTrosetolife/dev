import { log } from "./log.mjs";
import { each } from "./each.mjs";
export function log_list(filtered) {
  each(filtered, (item) => {
    log({
      item,
    });
  });
}
