import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
import { http_cache } from "./http_cache.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { keyboard_keys_sorted } from "./keyboard_keys_sorted.mjs";
export async function sandbox_4() {
  await each_async(keyboard_keys_sorted(), async function (letter) {
    let url = string_combine_multiple([
      "https://www.catholic-hierarchy.org/bishop/la",
      letter,
      ".html",
    ]);
    let s = await http_cache(url);
    log({
      s,
    });
  });
}
