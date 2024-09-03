import { html_parse_visit_tag } from "./html_parse_visit_tag.mjs";
import { exit } from "./exit.mjs";
import { log } from "./log.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { ceb_dictionary_data } from "./ceb_dictionary_data.mjs";
import { list_includes } from "./list_includes.mjs";
import { ceb_stem } from "./ceb_stem.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { ceb_bible_words_definitions_map_cache } from "./ceb_bible_words_definitions_map_cache.mjs";
import { assert_message } from "./assert_message.mjs";
import { list_second } from "./list_second.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_get } from "./list_get.mjs";
export async function ceb_stem_test() {
  let data = await ceb_dictionary_data();
  each_object(data, (letter, parsed) => {
    let body = html_parse_visit_tag_single(parsed, "body");
    let b2 = list_second(body.children);
    let b3 = list_get(b2.children, 3);
    each(b3.children, (c) => {
      log({
        c: html_parse_text(c),
      });
    });
    exit();
    html_parse_visit_tag(body, "p", (p) => {
      html_parse_visit_tag(p, "tr", (tr) => {
        log({
          tr,
        });
      });
    });
  });
  return;
  let map = await ceb_bible_words_definitions_map_cache();
  let removes = ["juda", "moises"];
  each_object(map, (stem, inputs) => {
    each(inputs, (input) => {
      if (list_includes(removes, input)) {
        return;
      }
      let choices = ceb_stem(input);
      assert_message(list_includes, [choices, stem], () => ({
        input,
        stem,
      }));
    });
  });
}
