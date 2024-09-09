import { object_invert } from "./object_invert.mjs";
import { bible_books_names_lookup } from "./bible_books_names_lookup.mjs";
export async function bible_books_names_lookup_inverted(bible_folder) {
  let lookup = await bible_books_names_lookup(bible_folder);
  let inverted = object_invert(lookup);
  return inverted;
}
