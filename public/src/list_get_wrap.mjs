import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
export function list_get_wrap(choices, index) {
  return list_get(choices, index % list_size(choices));
}
