export function list_sort_map_descending(list, element_mapper) {
  list.sort(function (a, b) {
    let v = element_mapper(b) - element_mapper(a);
    return v;
  });
}
