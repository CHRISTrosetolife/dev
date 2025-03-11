import { app_language_2_upload_pairs_ceb2 } from "./app_language_2_upload_pairs_ceb2.mjs";
import { http_cache } from "./http_cache.mjs";
export async function sandbox_3() {
  let text2 = await http_cache(
    "https://raw.githubusercontent.com/first20hours/google-10000-english/refs/heads/master/google-10000-english-usa.txt",
  );
  await app_language_2_upload_pairs_ceb2();
}
