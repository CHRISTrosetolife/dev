import { json_from } from "./json_from.mjs";
import { json_to } from "./json_to.mjs";
export function object_copy(object) {
  let json = json_to(copy);
  let v = json_from(json);
  return v;
}
