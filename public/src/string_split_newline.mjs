import { newline } from "./newline.mjs";
import { string_split } from "./string_split.mjs";
export function string_split_newline(csv_string) {
  return string_split(csv_string, newline());
}
