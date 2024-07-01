import { each_index_reverse } from "./each_index_reverse.mjs";
import { list_threshold_index_generic } from "./list_threshold_index_generic.mjs";
export function list_threshold_index_reverse(list, threshold) {
  let lambda_each_index = each_index_reverse;
  return list_threshold_index_generic(lambda_each_index, list, threshold);
}
