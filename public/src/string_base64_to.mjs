import { buffer_to } from "./buffer_to.mjs";
export function string_base64_to(input) {
  let v = buffer_to(input).toString("base64");
  return v;
}
