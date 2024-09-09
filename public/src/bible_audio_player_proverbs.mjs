import { assert } from "./assert.mjs";
import { number_pad } from "./number_pad.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { range_from } from "./range_from.mjs";
import { bible_book_name_to_number } from "./bible_book_name_to_number.mjs";
import { string_includes_curry_right } from "./string_includes_curry_right.mjs";
import { each_async } from "./each_async.mjs";
import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
import { string_includes } from "./string_includes.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { list_map } from "./list_map.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export async function bible_audio_player_proverbs() {
  let book_from = "Proverbs";
  let book_to = book_from;
  let bible_folder = "engbsb";
  let number_from = await bible_book_name_to_number(bible_folder, book_from);
  let number_to = await bible_book_name_to_number(bible_folder, book_from);
  assert(less_than_equal, [number_from, number_to]);
  let numbers = range_from(number_from, number_to);
  let numbers_s = list_map(numbers, (n) => number_pad(n, 2));
  let download_folders_fcbh = ["ENGESVO2DA", "ENGESVN2DA"];
  await each_async(download_folders_fcbh, async (download_folder) => {
    await each_async(numbers_s, async (n) => {
      await bible_audio_player_english(download_folder, (file_path) => {
        let file_name = path_parse_base(file_path);
        !string_includes(file_name, "_____") &&
          string_starts_with(file_name, "B" + n);
      });
    });
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
