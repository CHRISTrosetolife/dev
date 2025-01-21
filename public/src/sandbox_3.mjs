import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { http_cache } from "./http_cache.mjs";
import { ceb_defintion_en } from "./ceb_defintion_en.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
export async function sandbox_3() {
  let text = await http_cache(
    "https://raw.githubusercontent.com/first20hours/google-10000-english/refs/heads/master/google-10000-english-usa.txt",
  );
  await ceb_defintion_en("god");
  let lines = string_split_newline(text);
  let trimmed = list_map(lines, string_trim_whitespace);
  each(list, (item) => {});
}
