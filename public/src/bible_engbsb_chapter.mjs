import { list_adder_visit } from "./list_adder_visit.mjs";
import { html_parse_visit_attribute_values } from "./html_parse_visit_attribute_values.mjs";
import { bible_verses_parse } from "./bible_verses_parse.mjs";
import { bible_chapter_parsed } from "./bible_chapter_parsed.mjs";
import { list_adder } from "./list_adder.mjs";
export async function bible_engbsb_chapter(chapter_name) {
  let root = await bible_chapter_parsed("engbsb", chapter_name);
  let verses = list_adder((la) =>
    html_parse_visit_attribute_values(
      root,
      "class",
      ["m", "pc", "pmo", "q", "li"],
      list_adder_visit(la),
    ),
  );
  let eng = bible_verses_parse(verses);
  return eng;
}
