import { object_copy } from "./object_copy.mjs";
import { object_merge } from "./object_merge.mjs";
export function object_copy_merge(to, from) {
  let to_copy = object_copy(to);
  return object_merge(to_copy, from);
}
