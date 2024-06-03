import { html_parse_text } from "./html_parse_text.mjs";
import { list_adder_visit } from "./list_adder_visit.mjs";
import { html_parse_visit_attribute_value } from "./html_parse_visit_attribute_value.mjs";
import { list_adder } from "./list_adder.mjs";
import { bible_engbsb_chapter } from "./bible_engbsb_chapter.mjs";
import { bible_verses_parse } from "./bible_verses_parse.mjs";
import { bible_chapter_parsed } from "./bible_chapter_parsed.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { string_replace_multiple } from "./string_replace_multiple.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { equal_by } from "./equal_by.mjs";
import { assert } from "./assert.mjs";
import { list_length } from "./list_length.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_return } from "./js_code_return.mjs";
export async function bible_ceb_chapter(chapter_name) {
  let eng = await bible_engbsb_chapter(chapter_name);
  let parsed_ceb = await bible_chapter_parsed("cebulb_html", chapter_name);
  let verses_ceb = list_adder((la) =>
    html_parse_visit_attribute_value(
      parsed_ceb,
      "class",
      ["p"],
      list_adder_visit(la),
    ),
  );
  let text = html_parse_text(verses_ceb);
  let ceb = bible_verses_parse(text);
  assert(equal_by, [eng, ceb, list_length]);
  let symbols = [",", "1", "2", ".", ";", "“", "”", ":"];
  let words_unique = list_adder_unique((la) => {
    for (let m of ceb) {
      let { tokens } = m;
      for (let token of tokens) {
        let mapped3 = string_case_lower(token);
        let mapped4 = string_replace_multiple(mapped3, symbols, "");
        if (mapped4.length >= 1) {
          la(mapped4);
        }
      }
    }
  });
  let definitions = {};
  for (let w of words_unique) {
    let d = await ceb_definition(w);
    object_property_set(definitions, w, d);
  }
  let data = {
    ceb,
    eng,
    definitions,
  };
  let body_string = js_code_return(json_to(data));
  let fn_name = `bible_data_${string_case_lower(chapter_name)}`;
  return data;
}
