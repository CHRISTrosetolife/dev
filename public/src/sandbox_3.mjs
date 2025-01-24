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
  let text = await http_cache("https://norvig.com/ngrams/count_1w.txt");
  let lines = string_split_newline(text);
  let split = list_map(lines, string_split_space);
  let firsts = await each_async(trimmed, async (t) => {
    await ceb_defintion_en(t);
  });
}
