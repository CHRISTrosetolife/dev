import { list_random_item } from "./list_random_item.mjs";
import { list_size_random } from "./list_size_random.mjs";
export function list_size_randoms(counts, crosses) {
  return list_size_random(list_random_item(counts), crosses);
}
