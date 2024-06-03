import { bible_verses_parse } from "./bible_verses_parse.mjs";
import { list_join } from "./list_join.mjs";
import { list_map } from "./list_map.mjs";
import { bible_chapter_parsed } from "./bible_chapter_parsed.mjs";
export async function bible_engbsb_chapter(chapter_name) {
  let root = await bible_chapter_parsed("engbsb_html", chapter_name);
  let verses_bsb = root.querySelectorAll(".m,.pc");
  let mapped6 = list_map(verses_bsb, (v) => v.rawText);
  let joined = list_join(mapped6, "");
  let eng = bible_verses_parse(joined);
  return eng;
}
