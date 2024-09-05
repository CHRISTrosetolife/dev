import { string_includes_curry_right } from "./string_includes_curry_right.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_books_names_lookup } from "./bible_books_names_lookup.mjs";
import { object_invert } from "./object_invert.mjs";
import { each_async } from "./each_async.mjs";
import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
import { string_includes } from "./string_includes.mjs";
export async function bible_audio_player_proverbs() {
  let book = "Proverbs";
  let lookup = await bible_books_names_lookup("engbsb");
  let inverted = object_invert(lookup);
  let acronym = object_property_get(inverted, book);
  let download_folders_fcbh = ["ENGESVO2DA", "ENGESVN2DA"];
  await each_async(download_folders_fcbh, async (download_folder) => {
    await bible_audio_player_english(
      download_folder,
      (file_name) =>
        !string_includes(file_name, "_____") &&
        string_includes(file_name, "Proverbs"),
    );
  });
  let download_folders_regular = [
    "ENGNLTO2DA",
    "ENGNRSO2DA",
    "WEBD_OT",
    "WEBD_NT",
    "00_NHEBI_OT_Audio_Complete",
    "BBE_NewTestamentAudio_Australia",
    "EN1WEBO2DA",
    "ENGESVO1DA",
    "niv_mp3_bible_new_international_version",
    "rsv",
    "ENGESHN1DA",
    "BBE_OldTestamentAudio_India",
    "ENGESVO1DA",
    "ENGESHN1DA",
    "00_Bible in Basic English Old Testament Audio MP3 Files",
  ];
  let download_folders_regular_computer_voice = [
    "NHEB_NT_audio",
    "NHEB_OT_audio",
  ];
  await each_async(download_folders_regular, async (download_folder) => {
    await bible_audio_player_english(
      download_folder,
      string_includes_curry_right(book),
    );
  });
  return;
  let download_folder_acronymns = "BBEM_complete";
  await bible_audio_player_english(
    download_folder_acronymns,
    string_includes_curry_right(acronym),
  );
}
