import { html_parse_visit_attribute_values_list } from "./html_parse_visit_attribute_values_list.mjs";
import { bible_verses_parse } from "./bible_verses_parse.mjs";
import { bible_chapter_parsed } from "./bible_chapter_parsed.mjs";
export async function bible_engbsb_chapter(chapter_name) {
  let root = await bible_chapter_parsed("engbsb", chapter_name);
  let attribute_values = ["m", "pc", "pmo", "q", "li"];
  let attribute_name = "class";
  let verses = html_parse_visit_attribute_values_list(
    root,
    attribute_name,
    attribute_values,
  );
  let eng = bible_verses_parse(verses);
  return eng;
}
