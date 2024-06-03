import { html_parse_visit_attribute_values } from "./html_parse_visit_attribute_values.mjs";
import { bible_verses_parse } from "./bible_verses_parse.mjs";
import { list_join } from "./list_join.mjs";
import { list_map } from "./list_map.mjs";
import { bible_chapter_parsed } from "./bible_chapter_parsed.mjs";
import { list_adder } from "./list_adder.mjs";
export async function bible_engbsb_chapter(chapter_name) {
  let root = await bible_chapter_parsed("engbsb_html", chapter_name);
  let verses_bsb = list_adder((la) =>
    html_parse_visit_attribute_values(root, "class", ["m", "pc"], (v) => {
      let node = v;
    }),
  );
  let mapped6 = list_map(verses_bsb, (v) => v.rawText);
  let joined = list_join(mapped6, "");
  let eng = bible_verses_parse(joined);
  return eng;
}
