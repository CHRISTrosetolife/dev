export function list_filter_by(list, filter) {
  return list.filter((item) => filter(item));
}
