export function list_map_index(list, mapper) {
  return list.map((element, index) => mapper(element, index));
}
