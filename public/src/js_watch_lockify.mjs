import { js_statement_return } from "./js_statement_return.mjs";
import { list_clear } from "./list_clear.mjs";
import { list_copy } from "./list_copy.mjs";
import { log } from "./log.mjs";
import { js_declaration_single_body } from "./js_declaration_single_body.mjs";
export function js_watch_lockify(ast) {
  let b = js_declaration_single_body(ast);
  let copy = list_copy(b);
  list_clear(b);
  let r = js_statement_return(argument);
  log({
    b,
  });
}
