import { object_copy } from "./object_copy.mjs";
import { object_replace } from "./object_replace.mjs";
export function object_copy_replace(original, replacement_to_copy) {
  object_replace(original, object_copy(replacement_to_copy));
}
