import { log } from "./log.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
export function js_dollar(ast) {
  js_visit_identifiers(ast, (v) => {
    let { node } = v;
    let { name } = node;
    let prefix = "$";
    if (string_starts_with(name, prefix)) {
      let remaining = string_prefix_without(name, prefix);
      if (remaining === "l") {
      }
      log({
        remaining,
      });
    }
  });
}
