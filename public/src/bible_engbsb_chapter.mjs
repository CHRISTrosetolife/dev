import { html_parse_visit_classes_list } from "./html_parse_visit_classes_list.mjs";
import { bible_verses_parse } from "./bible_verses_parse.mjs";
import { bible_chapter_parsed } from "./bible_chapter_parsed.mjs";
export async function bible_engbsb_chapter(chapter_name) {
  let root = await bible_chapter_parsed("engbsb", chapter_name);
  let attribute_values = ["m", "pc", "pmo", "q", "li", "q2", "li2"];
  let verses = html_parse_visit_classes_list(root, attribute_values);
  let eng = bible_verses_parse(verses);
  return eng;
}
