import { list_includes } from "./list_includes.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { js_tokenize } from "./js_tokenize.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_learn_code_source_to_tokens(source) {
  let tokens = list_adder((la) => {
    for (let token of js_tokenize(source)) {
      la(token);
    }
  });
  let answer = list_map(tokens, (t) => {
    let { type } = t;
    let { label } = type;
    let { value } = t;
    if (equal(label, "string")) {
      return string_delimit(value);
    }
    let labels = ["name", "num", "+/-", "</>/<=/>=", "==/!=/===/!=="];
    if (list_includes(labels, label)) {
      return value.toString();
    }
    return label;
  });
  return answer;
}
