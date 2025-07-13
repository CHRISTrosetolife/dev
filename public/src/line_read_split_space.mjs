import { line_read } from "./line_read.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { json_to } from "./json_to.mjs";
export async function line_read_split_space() {
  let value = await line_read();
  let s = string_split_space(value);
  let v = json_to(s);
  return v;
}
