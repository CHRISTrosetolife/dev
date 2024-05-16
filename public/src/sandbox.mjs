import { tests_generate_single } from "./tests_generate_single.mjs";
import { logic_parse } from "./logic_parse.mjs";
export function sandbox() {
  tests_generate_single(logic_parse.name, ["a(b(),c())"], 4);
}
