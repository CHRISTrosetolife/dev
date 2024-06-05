import { log } from "./log.mjs";
import { string_includes } from "./string_includes.mjs";
export function string_includes_curry(function_name) {
  log({
    function_name,
  });
  return (term) => {
    log({
      term,
    });
    let result = string_includes(function_name, term);
    return result;
  };
}
