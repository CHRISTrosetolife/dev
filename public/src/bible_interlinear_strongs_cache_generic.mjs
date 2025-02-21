import { never } from "./never.mjs";
import { assert } from "./assert.mjs";
import { http_cache } from "./http_cache.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function bible_interlinear_strongs_cache_generic(
  url_base,
  language,
  strong,
) {
  assert(never, []);
  let url = string_combine_multiple([
    url_secure_w3(),
    url_base,
    language,
    "/",
    strong,
    ".htm",
  ]);
  let v = await http_cache(url);
  return v;
}
