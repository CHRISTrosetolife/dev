import { function_names } from "./function_names.mjs";
import { each_async } from "./each_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function function_delete_if_starts_with(prefix) {
  let ns = await function_names();
  let starts_with = list_filter(ns, (n) => string_starts_with(n, prefix));
  return starts_with;
  await each_async(ns, async (n) => {});
}
