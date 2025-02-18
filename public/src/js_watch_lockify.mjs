import { log } from "./log.mjs";
import { js_declaration_single_body } from "./js_declaration_single_body.mjs";
export function js_watch_lockify(ast) {
  let b = js_declaration_single_body(ast);
  log({
    b,
  });
}
