import { url_secure } from "./url_secure.mjs";
import { string_combine } from "./string_combine.mjs";
export function url_repository() {
  return string_combine(url_secure(), "github.com/CHRISTrosetolife/dev/");
}
