import { bible_book_name } from "./bible_book_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_book_name_text(book_code) {
  let v = string_combine_multiple(["📖 Book ", bible_book_name(book_code)]);
  return v;
}
