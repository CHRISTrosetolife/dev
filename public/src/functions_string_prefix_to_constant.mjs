import { log } from "./log.mjs";
import { data_functions } from "./data_functions.mjs";
import { each_object } from "./each_object.mjs";
import { string_is } from "./string_is.mjs";
import { each } from "./each.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { assert } from "./assert.mjs";
export async function functions_string_prefix_to_constant(prefix) {
  assert(string_is, [prefix]);
  let functions = await data_functions();
  each_object(functions, (function_name, details) => {
    let { literals } = details;
    each(literals, (literal) => {
      if (string_is(literal)) {
        if (string_starts_with(literal, prefix)) {
          log({
            function_name,
          });
        }
      }
    });
  });
}
