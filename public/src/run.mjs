import { function_aliases } from "./function_aliases.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { function_run } from "./function_run.mjs";
import { process_argv_remaining } from "./process_argv_remaining.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function run() {
  let r = process_argv_remaining();
  let { first, remaining } = list_first_remaining(r);
  let aliases = function_aliases();
  if (object_property_exists(aliases, first)) {
    first = object_property_get(aliases, first);
  }
  return await function_run(first, remaining);
}
