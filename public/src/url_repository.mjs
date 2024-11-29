import { url_secure } from "./url_secure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function url_repository() {
  return string_combine_multiple([
    url_secure(),
    "github.com/CHRISTrosetolife/dev/",
  ]);
}
