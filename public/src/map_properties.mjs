import { list_to } from "./list_to.mjs";
export function map_properties(selected) {
  return list_to(selected.keys());
}
