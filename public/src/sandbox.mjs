import { list_length } from "./list_length.mjs";
import { equal } from "./equal.mjs";
import { log } from "./log.mjs";
import { html_parse } from "./html_parse.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
import { list_adder } from "./list_adder.mjs";
import { equal_json } from "./equal_json.mjs";
import { object_properties } from "./object_properties.mjs";
import { string_includes } from "./string_includes.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_filter } from "./list_filter.mjs";
import { file_read } from "./file_read.mjs";
import { assert } from "./assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_single } from "./list_single.mjs";
export async function sandbox() {
  let path = "C:\\Users\\JESUS\\Downloads\\yyy8Uu-master\\yyy8Uu-master";
  let files = await folder_read(path, ".xml");
  let filtered = list_filter(files, (f) => string_includes(f, "\\cod-"));
  for (let f of filtered) {
    let input_string = await file_read(f);
    let parsed = html_parse(input_string);
    let teis = parsed.getElementsByTagName("TEI");
    assert(equal, [list_length(teis), 1]);
    let bodies = list_single(teis).getElementsByTagName("body");
    assert(equal, [list_length(bodies), 1]);
    let divs = list_single(bodies).getElementsByTagName("div");
    assert(equal, [list_length(divs), 1]);
    continue;
    let { TEI } = parsed;
    let { text } = TEI;
    let { body } = text;
    assert(equal_json, [object_properties(body), ["div"]]);
    let { div } = body;
    assert(equal_json, [object_properties(div), ["head", "p"]]);
    let parts = list_adder((la) => {
      let { p, head } = div;
      for (let h of head) {
        la(h);
      }
      console.log(p);
    });
    let normalized = list_map(parts, string_whitespace_normalize);
    return normalized;
  }
}
