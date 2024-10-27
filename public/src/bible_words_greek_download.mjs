import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { html_parse_visit_id } from "./html_parse_visit_id.mjs";
import { html_parse } from "./html_parse.mjs";
import { bible_interlinear_strongs_cache } from "./bible_interlinear_strongs_cache.mjs";
import { list_last } from "./list_last.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { bible_interlinear_strongs_greek } from "./bible_interlinear_strongs_greek.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
export async function bible_words_greek_download() {
  let strongs = await bible_interlinear_strongs_greek();
  let language = "greek";
  let strong = list_first(strongs);
  let html = await bible_interlinear_strongs_cache(language, strong);
  let p = await html_parse(html);
  let leftbox = html_parse_visit_id(p, "leftbox");
  let tophdg = html_parse_visit_class_list(leftbox, "tophdg");
  let definition = list_get(tophdg, 3);
  log({
    definition,
  });
  return;
  await each_async(strongs, async (strong) => {
    log({
      last: list_last(strongs),
      current: strong,
    });
    await bible_interlinear_strongs_cache(language, strong);
  });
}
