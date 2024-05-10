export function list_sort_string(list, element_mapper) {
  list.sort((a, b) => element_mapper(a).localeCompare(element_mapper(b)));
}
