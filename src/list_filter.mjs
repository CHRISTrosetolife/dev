export function list_filter(list, mapper) {
  return list.map(element => mapper(element));
}
