export function list_sort_string_map(list, element_mapper) {
  let collator = new Intl.Collator([], {
    numeric: true,
  });
  list.sort((a, b) => collator.compare(element_mapper(a), element_mapper(b)));
}
