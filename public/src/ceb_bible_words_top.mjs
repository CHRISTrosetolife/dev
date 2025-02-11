import { bible_words_score_language } from "./bible_words_score_language.mjs";
import { fn_name } from "./fn_name.mjs";
import { file_open } from "./file_open.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sort_property } from "./list_sort_property.mjs";
import { list_take } from "./list_take.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { string_combine } from "./string_combine.mjs";
export async function ceb_bible_words_top(count) {
  let words = await bible_words_score_language("ceb");
  list_sort_property(words, "score");
  list_reverse(words);
  let t = list_take(words, count);
  let m = list_map_property(t, "word");
  let file_path = folder_gitignore_path(
    string_combine(fn_name("ceb_bible_words_top"), ".txt"),
  );
  await file_overwrite(file_path, list_join_newline(m));
  await file_open(file_path);
}
