import { string_starts_with } from "./string_starts_with.mjs";
export function js_import_external_is(s) {
  return !string_starts_with(s, ".");
}
