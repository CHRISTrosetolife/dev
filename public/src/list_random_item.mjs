import { list_random_index } from "./list_random_index.mjs";
export function list_random_item(list) {
  return list[list_random_index(list)];
}
