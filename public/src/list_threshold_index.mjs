import { each_index } from "./each_index.mjs";
export function list_threshold_index(list, threshold) {
  let lambda_each_index = each_index;
  let index_first = null;
  each_index(list, (item, index) => {
    if (item >= threshold) {
      index_first = index;
      return true;
    }
  });
}
