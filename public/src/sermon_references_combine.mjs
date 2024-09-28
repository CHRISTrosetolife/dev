import { object_values } from "./object_values.mjs";
import { bible_books_prefix_to_name } from "./bible_books_prefix_to_name.mjs";
import { log } from "./log.mjs";
import { sermon_transform } from "./sermon_transform.mjs";
export async function sermon_references_combine(sermon_name) {
  await sermon_transform(sermon_name, (lines) => {
    let lookup = bible_books_prefix_to_name();
    let books = object_values(lookup);
    log({
      lines,
    });
    return lines;
  });
}
