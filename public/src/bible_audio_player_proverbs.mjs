import { each_async } from "./each_async.mjs";
import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
import { string_includes } from "./string_includes.mjs";
import { string_includes_curry } from "./string_includes_curry.mjs";
import { list_any } from "./list_any.mjs";
export async function bible_audio_player_proverbs() {
  let download_folders_fcbh = [
    "EN1WEBO2DA",
    "ENGCEVO2DA",
    "ENGESVN2DA",
    "ENGESVO2DA",
    "ENGNLTO2DA",
    "ENGNRSO2DA",
  ];
  await each_async(download_folders_fcbh, async (download_folders) => {
    let filter = (file_name) =>
      string_includes(file_name, "_____") &&
      list_any(["Psalms", "Proverbs"], string_includes_curry(file_name));
    await bible_audio_player_english(download_folder, filter);
  });
}
