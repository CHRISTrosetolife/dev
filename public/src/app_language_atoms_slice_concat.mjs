import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { app_language_atoms_slice } from "./app_language_atoms_slice.mjs";
export function app_language_atoms_slice_concat(app_fn, group) {
  let atoms = app_language_atoms_slice(app_fn, group);
  let concat = list_concat_multiple(atoms);
  return concat;
}
