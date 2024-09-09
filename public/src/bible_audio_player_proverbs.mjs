import { bible_book_name_to_number } from "./bible_book_name_to_number.mjs";
import { log } from "./log.mjs";
import { number_pad } from "./number_pad.mjs";
import { list_index } from "./list_index.mjs";
import { string_includes_curry_right } from "./string_includes_curry_right.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each_async } from "./each_async.mjs";
import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
import { string_includes } from "./string_includes.mjs";
export async function bible_audio_player_proverbs() {
  let book_from = "Proverbs";
  let book_to = book_from;
  let bible_folder = "engbsb";
  let number_from = await bible_book_name_to_number(bible_folder, book_from);
  log({
    number_from,
  });
  let acronym_to = object_property_get(inverted, book_to);
  let number_to = number_pad(list_index(books, acronym_to) + 1, 2);
  let download_folders_fcbh = ["ENGESVO2DA", "ENGESVN2DA"];
  await each_async(download_folders_fcbh, async (download_folder) => {
    await bible_audio_player_english(
      download_folder,
      (file_name) =>
        !string_includes(file_name, "_____") &&
        string_includes(file_name, book_from),
    );
  });
  let download_folders_regular = [
    "ENGNLTO2DA",
    "ENGNRSO2DA",
    "ENGCAVN2DA",
    "WEBD_OT",
    "WEBD_NT",
    "00_NHEBI_OT_Audio_Complete",
    "00_NHEBI_NT_Audio_Complete",
    "BBE_NewTestamentAudio_Australia",
    "ENGWEBN2DA",
    "niv_mp3_bible_new_international_version",
    "all_files_english_contemporary",
    "rsv",
    "ENGESHN1DA",
    "ENGNRSN2DA",
    "ENGESVO1DA",
    "EN1WEBO2DA",
    "ENGNLVN2DA",
    "EN1WEBN2DA",
    "ENGESHN1DA",
    "00_Bible in Basic English Old Testament Audio MP3 Files",
    "ENGCEVN2DA",
    "ENGESVN1DA",
    "ENGNKJN1DA",
    "ENGNLHN1DA",
    "ENGNLTN2DA",
    "ENGNLVN1DA",
    "ENGNRSN1DA",
  ];
  let download_folders_regular_computer_voice = [
    "NHEB_NT_audio",
    "NHEB_OT_audio",
  ];
  await each_async(download_folders_regular, async (download_folder) => {
    await bible_audio_player_english(
      download_folder,
      string_includes_curry_right(book_from),
    );
  });
  let download_folder_acronymns_computer_voice = "BBEM_complete";
}
