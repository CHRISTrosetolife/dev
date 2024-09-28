import { bible_books_prefix_to_name } from "./bible_books_prefix_to_name.mjs";
import { log } from "./log.mjs";
import { sermon_transform } from "./sermon_transform.mjs";
export async function sermon_references_combine(sermon_name) {
  await sermon_transform(sermon_name, (lines) => {
    bible_books_prefix_to_name();
    log({
      lines,
    });
    return lines;
  });
}
