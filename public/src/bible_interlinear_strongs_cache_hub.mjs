import { http_cache } from "./http_cache.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function bible_interlinear_strongs_cache_hub(language, strong) {
  let url = string_combine_multiple([
    url_secure_w3(),
    "biblehub.com/",
    language,
    "/",
    strong,
    ".htm",
  ]);
  return await http_cache(url);
}
