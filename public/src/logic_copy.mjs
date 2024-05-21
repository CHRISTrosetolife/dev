import { logic_parse } from "./logic_parse.mjs";
import { logic_unparse } from "./logic_unparse.mjs";
export function logic_copy(statement) {
  let unparsed = logic_unparse(statement);
  let copy = logic_parse(unparsed);
  return copy;
}
