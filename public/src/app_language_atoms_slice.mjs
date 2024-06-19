import { add_1 } from "./add_1.mjs";
import { list_slice } from "./list_slice.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
export function app_language_atoms_slice(app_fn, group) {
  let { left, right } = storage_local_get(app_fn, "position");
  let atoms = list_slice(group, left, add_1(right));
  return atoms;
}
