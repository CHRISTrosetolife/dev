import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { bible_chapter_verse_parse } from "./bible_chapter_verse_parse.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { bible_book_to_reference_prefix } from "./bible_book_to_reference_prefix.mjs";
import { list_single } from "./list_single.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { object_values } from "./object_values.mjs";
import { bible_books_prefix_to_name } from "./bible_books_prefix_to_name.mjs";
import { sermon_transform } from "./sermon_transform.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_join_space } from "./list_join_space.mjs";
export async function sermon_references_combine(sermon_name) {
  await sermon_transform(sermon_name, (lines) => {
    let lookup = bible_books_prefix_to_name();
    let books = object_values(lookup);
    let prepared = list_map(lines, (line) => {
      let f = list_filter(books, (book) =>
        string_starts_with(line, bible_book_to_reference_prefix(book)),
      );
      if (list_empty_is(f)) {
        return {
          line,
          reference_is: false,
        };
      }
      let book = list_single(f);
      let remaining = string_prefix_without(
        line,
        bible_book_to_reference_prefix(book),
      );
      let s = string_split_space(remaining);
      let { first: chapter_verse, remaining: remaining2 } =
        list_first_remaining(s);
      let { chapter_name, verse_number } =
        bible_chapter_verse_parse(chapter_verse);
      return {
        line,
        reference_is: true,
        book,
        chapter_name,
        verse_number,
        remaining: list_join_space(remaining2),
      };
    });
    list_adder((la) => {
      let previous_reference_is = false;
      each(prepared, (p) => {
        let { line, reference_is } = p;
        if (reference_is) {
          if (false) {
          }
          previous_reference_is = true;
        }
      });
    });
    return lines;
  });
}
