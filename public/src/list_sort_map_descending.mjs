export function list_sort_map_descending(list, element_mapper) {
  list.sort(function (a, b) {
    let v = element_mapper(a) - element_mapper(b);
    return v;
  });
}
