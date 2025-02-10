import { bible_interlinear_strongs_cache_hub } from "./bible_interlinear_strongs_cache_hub.mjs";
import { list_find } from "./list_find.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { html_parse_visit_id } from "./html_parse_visit_id.mjs";
import { html_parse } from "./html_parse.mjs";
export async function bible_interlinear_definition_hub(language, strong) {
  let html = await bible_interlinear_strongs_cache_hub(language, strong);
  let p = await html_parse(html);
  let leftbox = html_parse_visit_id(p, "leftbox");
  let tophdg = html_parse_visit_class_list(leftbox, "tophdg");
  let definition = list_find(tophdg, (t) => {
    let t_text = html_parse_text(t);
    t_text = string_trim_whitespace(t_text);
    return equal(t_text, "Short Definition:");
  });
  let definition_text = html_parse_text(definition);
  definition_text = string_trim_whitespace(definition_text);
  assert(equal, [definition_text, "Short Definition:"]);
  let { next } = definition;
  let next_text = html_parse_text(next);
  return next_text;
}
