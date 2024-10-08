import { html_style_green } from "./html_style_green.mjs";
import { list_size } from "./list_size.mjs";
import { html_spaced_tokens } from "./html_spaced_tokens.mjs";
import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { assert } from "./assert.mjs";
import { bible_data_jas01 } from "./bible_data_jas01.mjs";
import { equal_by } from "./equal_by.mjs";
import { html_element } from "./html_element.mjs";
import { range } from "./range.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { list_get } from "./list_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { noop } from "./noop.mjs";
import { html_style } from "./html_style.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { bible_token_normalize } from "./bible_token_normalize.mjs";
export function app_bible() {
  let root = html_document_body();
  html_style(root, {
    "font-family": "Sans-Serif",
    "font-size": "5vh",
    margin: "0",
  });
  let top = html_div(root);
  html_style(top, {
    height: "75vh",
    "overflow-y": "scroll",
  });
  let bottom = html_element(root, "div");
  html_style(bottom, {
    height: "25vh",
    "overflow-y": "scroll",
    "background-color": "lightgreen",
  });
  let data = bible_data_jas01();
  let { eng } = data;
  let { ceb } = data;
  let { definitions } = data;
  assert(equal_by, [eng, ceb, list_size]);
  let length = list_size(eng);
  for (let i of range(length)) {
    let verse = html_element(top, "div");
    let first = html_element(verse, "div");
    let eng_i = list_get(eng, i);
    let eng_tokens = object_property_get(eng_i, "tokens");
    let ceb_i = list_get(ceb, i);
    let ceb_tokens = object_property_get(ceb_i, "tokens");
    let verse_number = object_property_get(eng_i, "verse_number");
    let verse_number_element = html_element(first, "span");
    html_inner_set(verse_number_element, verse_number);
    html_style(verse_number_element, {
      "font-weight": "bold",
    });
    html_spaced_tokens(first, eng_tokens, noop);
    let second = html_element(verse, "div");
    html_style_green(second);
    html_spaced_tokens(second, ceb_tokens, (token_element, token) => {
      html_on_click(token_element, () => {
        html_inner_set(bottom, "");
        let n = bible_token_normalize(token);
        let d = object_property_get(definitions, n);
        html_spaced_tokens(bottom, d, () => {
          let spacer = html_element(bottom, "span");
          html_inner_set(spacer, ",");
        });
      });
    });
  }
}
