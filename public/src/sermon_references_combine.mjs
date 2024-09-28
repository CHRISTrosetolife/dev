import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { object_values } from "./object_values.mjs";
import { bible_books_prefix_to_name } from "./bible_books_prefix_to_name.mjs";
import { log } from "./log.mjs";
import { sermon_transform } from "./sermon_transform.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function sermon_references_combine(sermon_name) {
  await sermon_transform(sermon_name, (lines) => {
    let lookup = bible_books_prefix_to_name();
    let books = object_values(lookup);
    let mapped = list_map(lines, (line) => {
      let f = list_filter(books, (book) => string_starts_with(line, book));
      if (list_empty_is(f)) {
        return {};
      }
    });
    log({
      mapped,
    });
    return lines;
  });
}
