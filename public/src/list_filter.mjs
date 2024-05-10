export function list_filter(list, filter) {
  return list.filter((item) => filter(item));
}
