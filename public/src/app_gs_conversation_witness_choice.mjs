import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_get } from "./list_get.mjs";
import { app_gs_bible_chapter_prefix } from "./app_gs_bible_chapter_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_run } from "./function_run.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { bible_books_prefix_to_name } from "./bible_books_prefix_to_name.mjs";
import { string_split_underscore } from "./string_split_underscore.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function app_gs_conversation_witness_choice(
  objection_id,
  on_click,
) {
  assert_arguments_length(arguments, 2);
  let [book_id, chapter, verse_index, objection_index] =
    string_split_underscore(objection_id);
  let book_name = bible_books_prefix_to_name()[string_case_upper(book_id)];
  chapter = integer_parse(chapter);
  verse_index = integer_parse(verse_index);
  objection_index = integer_parse(objection_index);
  let verses = await function_run(
    string_combine_multiple([
      app_gs_bible_chapter_prefix(),
      app_gs_bible_chapter_name(book_id, chapter),
    ]),
    [],
  );
  let verse = list_get(verses, verse_index);
  let objection = list_get(verse.objections, objection_index);
  let answer_verses = list_slice(
    verses,
    verse_index,
    verse_index + objection.count,
  );
  let { text: objection_text } = objection;
  let first = list_first(answer_verses);
  let { verse_number: verse_number_first } = first;
  let last = list_last(answer_verses);
  let { verse_number: verse_number_last } = last;
  let answer_texts = list_map_property(answer_verses, "text");
  let answer = list_join_space(answer_texts);
  let choice_text = string_combine_multiple([
    "📖 ",
    book_name,
    " ",
    chapter,
    ":",
    verse_number_first,
    first !== last ? "-" + verse_number_last : "",
    " - ",
    answer,
  ]);
  let choice_correct = {
    objection_text,
    answer_text: choice_text,
    on_click: on_click,
  };
  return choice_correct;
}
