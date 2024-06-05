import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { bible_chapter_parsed } from "./bible_chapter_parsed.mjs";
export async function bible_cebulb_chapter(chapter_name) {
  let parsed_ceb = await bible_chapter_parsed("cebulb", chapter_name);
  let verses_ceb = html_parse_visit_class_list(parsed_ceb, "p");
  return verses_ceb;
}
