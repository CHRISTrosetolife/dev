import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { countries } from "./countries.mjs";
export function prayer_auto() {
  let cs = countries();
  each(cs, (c) => {
    log(string_combine_multiple(["God bless the country of ", c]));
  });
}
