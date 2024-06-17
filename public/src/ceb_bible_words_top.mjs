import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
import { list_sort_property } from "./list_sort_property.mjs";
import { list_take } from "./list_take.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { string_combine } from "./string_combine.mjs";
export async function ceb_bible_words_top(count) {
  let words = await ceb_bible_words_score();
  list_sort_property(words, "score");
  list_reverse(words);
  let t = list_take(words, count);
  let m = list_map_property(t, "word");
  let file_path = folder_gitignore_path(
    string_combine(ceb_bible_words_top.name, ".txt"),
  );
  await file_overwrite(file_path, list_join_newline(m));
}
await file_open(file_path);
