import { http_cache } from "./http_cache.mjs";
import { log } from "./log.mjs";
import { ceb_defintion_en } from "./ceb_defintion_en.mjs";
export async function sandbox_3() {
  await http_cache(
    "https://raw.githubusercontent.com/first20hours/google-10000-english/refs/heads/master/google-10000-english-usa.txt",
  );
  await ceb_defintion_en("god");
  log({
    text,
  });
}
