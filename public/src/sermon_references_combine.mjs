import { list_add_first } from "./list_add_first.mjs";
import { string_digit_is } from "./string_digit_is.mjs";
import { string_first } from "./string_first.mjs";
import { bible_reference_multiple } from "./bible_reference_multiple.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_last } from "./list_last.mjs";
import { list_remove_all } from "./list_remove_all.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { equal_by_property_multiple } from "./equal_by_property_multiple.mjs";
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
      let reference_not = {
        line,
        reference_is: false,
      };
      if (list_empty_is(f)) {
        return reference_not;
      }
      let book = list_single(f);
      let remaining = string_prefix_without(
        line,
        bible_book_to_reference_prefix(book),
      );
      let s = string_split_space(remaining);
      let { first: chapter_verse, remaining: remaining2 } =
        list_first_remaining(s);
      let chapter_verse_first = string_first(chapter_verse);
      if (!string_digit_is(chapter_verse_first)) {
        return reference_not;
      }
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
    let l = list_adder((la) => {
      let previous = null;
      let group = [];
      each(prepared, (p) => {
        let { line, reference_is } = p;
        if (reference_is) {
          let clear = true;
          if (previous !== null) {
            if (
              equal_by_property_multiple(["book", "chapter_name"], previous, p)
            ) {
              let { verse_number } = p;
              let previous_verse_number = object_property_get(
                previous,
                "verse_number",
              );
              verse_number = integer_parse(verse_number);
              previous_verse_number = integer_parse(previous_verse_number);
              if (previous_verse_number + 1 === verse_number) {
                clear = false;
              }
            }
          }
          if (clear) {
            group_clear(group, la);
          }
          list_add(group, p);
          previous = p;
        } else {
          group_clear(group, la);
          la(line);
          previous = null;
        }
      });
      group_clear(group, la);
    });
    return l;
  });
  function group_clear(group, la) {
    if (list_empty_not_is(group)) {
      let { first, remaining } = list_first_remaining(group);
      let ns = [first];
      if (list_empty_not_is(remaining)) {
        let last = list_last(remaining);
        list_add(ns, last);
      }
      let { book, chapter_name } = first;
      let m = list_map_property(ns, "verse_number");
      let r = bible_reference_multiple(book, chapter_name, m);
      let rs = list_map_property(group, "remaining");
      list_add_first(rs, r);
      let j2 = list_join_space(rs);
      la(j2);
      list_remove_all(group);
    }
  }
}
