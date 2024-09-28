import { bible_chapter_verse_parse } from "./bible_chapter_verse_parse.mjs";
import { log } from "./log.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
import { list_find_property_or } from "./list_find_property_or.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { list_take } from "./list_take.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { assert_message } from "./assert_message.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { number_less_than } from "./number_less_than.mjs";
import { tokens_simple } from "./tokens_simple.mjs";
import { each } from "./each.mjs";
import { list_remove_multiple_at } from "./list_remove_multiple_at.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { file_read } from "./file_read.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { folder_user_downloads } from "./folder_user_downloads.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_interlinear() {
  let file_name_prefix = "bsb_tables.";
  let csv_path = path_join([
    folder_user_downloads(),
    string_combine_multiple([file_name_prefix, "csv"]),
  ]);
  let csv_string = await file_read(csv_path);
  let csv_lines = string_split_newline(csv_string);
  list_remove_multiple_at(csv_lines, 0, 2);
  let bible = [];
  let reference;
  each(csv_lines, (line) => {
    let t = tokens_simple(line, '"', ",");
    if (number_less_than(list_size(t), 6)) {
      return;
    }
    let word = list_get(t, 5);
    if (string_empty_is(word)) {
      return;
    }
    let transliteration = list_get(t, 7);
    let strong = list_get(t, 10);
    let reference_new = list_get(t, 11);
    if (string_empty_not_is(reference_new)) {
      reference = reference_new;
    }
    let translation = string_trim_whitespace(list_get(t, 14));
    let split = string_split_space(reference);
    assert_message(greater_than_equal, [list_size(split), 2], () => ({
      reference,
      t,
    }));
    let book_name_parts = list_take(split, subtract_1(list_size(split)));
    let book_name = list_join_space(book_name_parts);
    let book = list_find_property_or(bible, "book_name", book_name, null);
    if (book === null) {
      book = {
        book_name,
        chapters: [],
      };
      list_add(bible, book);
    }
    let chapter_verse = list_last(split);
    let { chapter_name, verse_number } =
      bible_chapter_verse_parse(chapter_verse);
    let chapter = list_find_property_or(
      book.chapters,
      "chapter_name",
      chapter_name,
      null,
    );
    if (chapter === null) {
      chapter = {
        chapter_name,
        verses: [],
      };
      list_add(book.chapters, chapter);
      log({
        book_name,
        chapter_name,
      });
    }
    let verse = list_find_property_or(
      chapter.verses,
      "verse_number",
      verse_number,
      null,
    );
    if (verse === null) {
      verse = {
        verse_number,
        tokens: [],
      };
      list_add(chapter.verses, verse);
    }
    list_add(verse.tokens, {
      word,
      transliteration,
      strong,
      translation,
    });
  });
  return bible;
}
