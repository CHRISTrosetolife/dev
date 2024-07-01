export function list_threshold_index_generic(
  lambda_each_index,
  list,
  threshold,
) {
  let index_first = null;
  lambda_each_index(list, (item, index) => {
    if (item >= threshold) {
      index_first = index;
      return true;
    }
  });
  return index_first;
}
