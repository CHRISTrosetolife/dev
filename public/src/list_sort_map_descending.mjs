export function list_sort_map_descending(list, element_mapper) {
  list.sort((a, b) => element_mapper(a) - element_mapper(b));
}
