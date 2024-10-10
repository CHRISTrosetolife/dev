import { number_is } from "./number_is.mjs";
import { integer_parse_try } from "./integer_parse_try.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { function_names_each } from "./function_names_each.mjs";
export async function function_names_prefix_number_each(prefix_old, lambda) {
  await function_names_each(async (fn_old) => {
    if (string_starts_with(fn_old, prefix_old)) {
      let without = string_prefix_without(fn_old, prefix_old);
      let p = integer_parse_try(without);
      if (number_is(p)) {
        await lambda(without, fn_old);
      }
    }
  });
}
