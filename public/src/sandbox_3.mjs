import { english_words } from "./english_words.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { http_cache } from "./http_cache.mjs";
import { ceb_defintion_en } from "./ceb_defintion_en.mjs";
export async function sandbox_3() {
  let text2 = await http_cache(
    "https://raw.githubusercontent.com/first20hours/google-10000-english/refs/heads/master/google-10000-english-usa.txt",
  );
  let filtered = await english_words();
  await each_log_async(filtered, async (t) => {
    await ceb_defintion_en(t);
  });
}
