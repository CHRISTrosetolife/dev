import { js_expression_call_args } from "./js_expression_call_args.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_expression_await } from "./js_expression_await.mjs";
import { list_add } from "./list_add.mjs";
import { js_statement_return } from "./js_statement_return.mjs";
import { list_clear } from "./list_clear.mjs";
import { list_copy } from "./list_copy.mjs";
import { log } from "./log.mjs";
import { js_declaration_single_body } from "./js_declaration_single_body.mjs";
export function js_watch_lockify(ast) {
  let b = js_declaration_single_body(ast);
  let copy = list_copy(b);
  list_clear(b);
  let e = js_expression_call_args(fn_name("watch_lock"));
  let argument = js_expression_await(e);
  let r = js_statement_return(argument);
  list_add(b, r);
  log({
    b,
  });
}
