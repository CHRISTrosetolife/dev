import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function string_symbols(text) {
  return list_adder_unique((la) => each(text, la));
}
