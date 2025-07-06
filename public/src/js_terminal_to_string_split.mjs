import { string_split_space } from "./string_split_space.mjs";
import { js_terminal_to_string } from "./js_terminal_to_string.mjs";
import { json_to } from "./json_to.mjs";
export async function js_terminal_to_string_split() {
  let value = await js_terminal_to_string();
  let s = string_split_space(value);
  let v = json_to(s);
  return v;
}
