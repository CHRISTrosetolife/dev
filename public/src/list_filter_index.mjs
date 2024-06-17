export function list_filter_index(list, filter) {
  return list.filter((item, index) => filter(item, index));
}
