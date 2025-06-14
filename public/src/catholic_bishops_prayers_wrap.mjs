import { storage_local_get } from "./storage_local_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function catholic_bishops_prayers_wrap(fn, key_part, n) {
  return string_combine_multiple([
    storage_local_get(
      fn,
      string_combine_multiple(["name_", key_part, "_before"]),
    ),
    " ",
    n,
    " ",
    storage_local_get(
      fn,
      string_combine_multiple(["name_", key_part, "_after"]),
    ),
  ]);
}
