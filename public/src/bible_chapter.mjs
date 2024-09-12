import { string_case_upper } from "./string_case_upper.mjs";
import { bible_verses_parse } from "./bible_verses_parse.mjs";
import { html_parse_visit_classes_list } from "./html_parse_visit_classes_list.mjs";
import { bible_chapter_parsed } from "./bible_chapter_parsed.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function bible_chapter(bible_folder, chapter_name) {
  assert_arguments_length(arguments, 2);
  chapter_name = string_case_upper(chapter_name);
  let root = await bible_chapter_parsed(bible_folder, chapter_name);
  let attribute_values = ["p", "m", "pc", "pmo", "q", "li", "q2", "li2", "d"];
  let verses = html_parse_visit_classes_list(root, attribute_values);
  let eng = bible_verses_parse(verses);
  return eng;
}
