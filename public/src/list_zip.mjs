import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
export function list_zip(lists, lambda) {
  let sizes = list_map(lists, list_size);
}
