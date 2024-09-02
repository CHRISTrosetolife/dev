import { object_invert } from "./object_invert.mjs";
import { each_async } from "./each_async.mjs";
import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
import { string_includes } from "./string_includes.mjs";
export async function bible_audio_player_proverbs() {
  object_invert();
  let download_folder_acronymns = "BBEM_complete";
  let download_folders_fcbh = [
    "EN1WEBO2DA",
    "ENGCEVO2DA",
    "ENGESVN2DA",
    "ENGESVO2DA",
    "ENGNLTO2DA",
    "ENGNRSO2DA",
  ];
  await each_async(download_folders_fcbh, async (download_folder) => {
    await bible_audio_player_english(
      download_folder,
      (file_name) =>
        string_includes(file_name, "_____") &&
        string_includes(file_name, "Proverbs"),
    );
  });
}
