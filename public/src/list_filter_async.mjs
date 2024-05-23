export function list_filter_async(list, filter) {
  return list.filter((item) => filter(item));
}
