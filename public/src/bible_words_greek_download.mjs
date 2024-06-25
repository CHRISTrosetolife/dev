import { http_cache } from "./http_cache.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_last } from "./list_last.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { bible_interlinear_strongs_greek } from "./bible_interlinear_strongs_greek.mjs";
export async function bible_words_greek_download() {
  let strongs = await bible_interlinear_strongs_greek();
  await each_async(strongs, async (strong) => {
    log({
      last: list_last(strongs),
      current: strong,
    });
    let url = string_combine_multiple([
      url_secure_w3(),
      "openbible.com/strongs/greek/",
      strong,
      ".htm",
    ]);
    await http_cache(url);
  });
}
