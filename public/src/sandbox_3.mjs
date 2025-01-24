import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { log } from "./log.mjs";
import { list_first } from "./list_first.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { http_cache } from "./http_cache.mjs";
import { ceb_defintion_en } from "./ceb_defintion_en.mjs";
import { each_async } from "./each_async.mjs";
export async function sandbox_3() {
  let text2 = await http_cache(
    "https://raw.githubusercontent.com/first20hours/google-10000-english/refs/heads/master/google-10000-english-usa.txt",
  );
  let url = "https://norvig.com/ngrams/count_1w.txt";
  let text = await http_cache(url);
  let lines = string_split_newline(text);
  let trimmed = list_map(lines, string_trim_whitespace);
  let split = list_map(lines, string_split_space);
  let firsts = list_map(split, list_first);
  log({
    firsts,
  });
  return;
  await each_async(firsts, async (t) => {
    await ceb_defintion_en(t);
  });
}
