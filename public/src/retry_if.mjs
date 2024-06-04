import { string_to } from "./string_to.mjs";
import { string_includes } from "./string_includes.mjs";
export function retry_if(e) {
  return string_includes(string_to(e), "ECONNRESET");
}
