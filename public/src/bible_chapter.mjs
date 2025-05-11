import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { bible_verses_parse } from "./bible_verses_parse.mjs";
import { html_parse_visit_classes_list } from "./html_parse_visit_classes_list.mjs";
import { bible_chapter_parsed } from "./bible_chapter_parsed.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_concat } from "./list_concat.mjs";
export async function bible_chapter(bible_folder, chapter_name) {
  assert_arguments_length(arguments, 2);
  chapter_name = string_case_upper(chapter_name);
  let root = await bible_chapter_parsed(bible_folder, chapter_name);
  let attribute_values = [
    "d",
    "ip",
    "m",
    "mi",
    "nb",
    "p",
    "pc",
    "pi",
    "pm",
    "pmo",
    "q",
    "q2",
    "qm",
    "qr",
    "li",
    "li2",
    "li3",
    "li4",
  ];
  let verses = html_parse_visit_classes_list(root, attribute_values);
  let main = html_parse_visit_class_single(root, "main");
  let verses_table = html_parse_visit_tag_list(main, "td");
  let c = list_concat(verses, verses_table);
  let eng = bible_verses_parse(c);
  return eng;
}
