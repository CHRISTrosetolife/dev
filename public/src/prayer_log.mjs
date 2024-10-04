import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
export function prayer_log(prayer_body) {
  log(
    string_combine_multiple([
      "God, according to the will of God, ",
      prayer_body,
      " amen",
    ]),
  );
}
