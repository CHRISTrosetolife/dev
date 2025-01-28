import { round_2 } from "./round_2.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function number_format_percent(count, total) {
  return string_combine_multiple([
    " (",
    round_2((count / (total === 0 ? 1 : total)) * 100),
    "%)",
  ]);
}
