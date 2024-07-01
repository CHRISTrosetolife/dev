import { list_threshold_index_generic } from "./list_threshold_index_generic.mjs";
import { each_index } from "./each_index.mjs";
export function list_threshold_index(list, threshold) {
  let lambda_each_index = each_index;
  return list_threshold_index_generic(lambda_each_index, list, threshold);
}
