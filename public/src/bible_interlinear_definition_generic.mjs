import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_find } from "./list_find.mjs";
import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { html_parse_visit_id } from "./html_parse_visit_id.mjs";
import { html_parse } from "./html_parse.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export async function bible_interlinear_definition_generic(
  html_lambda,
  language,
  strong,
  labels,
) {
  assert(string_empty_not_is, [strong]);
  let html = await html_lambda(language, strong);
  let p = await html_parse(html);
  let leftbox = html_parse_visit_id(p, "leftbox");
  let tophdg = html_parse_visit_class_list(leftbox, "tophdg");
  let mapped = list_map(labels, function (label) {
    let v = label_to_text(label);
    return v;
  });
  let definition = list_join_comma_space(mapped);
  let word = label_to_text("Original Word:");
  let v2 = {
    definition,
    word,
  };
  return v2;
  function label_to_text(label) {
    let definition = list_find(tophdg, function (t) {
      let t_text = html_parse_text(t);
      t_text = string_trim_whitespace(t_text);
      let v3 = equal(t_text, label);
      return v3;
    });
    let definition_text = html_parse_text(definition);
    definition_text = string_trim_whitespace(definition_text);
    assert(equal, [definition_text, label]);
    let { next } = definition;
    let next_text = html_parse_text(next);
    return next_text;
  }
}
