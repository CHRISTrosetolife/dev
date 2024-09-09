import { path_parse_base_starts_with } from "./path_parse_base_starts_with.mjs";
import { bible_books_old_count } from "./bible_books_old_count.mjs";
import { bible_audio_player_fcbh_starts_with } from "./bible_audio_player_fcbh_starts_with.mjs";
import { bible_audio_player_english_folders_numbers } from "./bible_audio_player_english_folders_numbers.mjs";
import { assert } from "./assert.mjs";
import { number_pad } from "./number_pad.mjs";
import { range_from } from "./range_from.mjs";
import { bible_book_name_to_number } from "./bible_book_name_to_number.mjs";
import { string_includes_curry_right } from "./string_includes_curry_right.mjs";
import { each_async } from "./each_async.mjs";
import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
import { string_includes } from "./string_includes.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { list_map } from "./list_map.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
export async function bible_audio_player_proverbs() {
  let book_from = "Proverbs";
  let book_to = book_from;
  let bible_folder = "engbsb";
  let number_from = await bible_book_name_to_number(bible_folder, book_from);
  let number_to = await bible_book_name_to_number(bible_folder, book_to);
  assert(less_than_equal, [number_from, number_to]);
  let numbers = range_from(number_from, number_to);
  let numbers_s = list_map(numbers, (n) => number_pad(n, 2));
  let numbers_nt_filtered = list_filter(
    numbers,
    (n) => n >= bible_books_old_count() + 1,
  );
  let numbers_nt = list_map(
    numbers_nt_filtered,
    (n) => n - bible_books_old_count(),
  );
  let download_folders_fcbh_underscore = ["ENGESVO2DA", "ENGESVN2DA"];
  await bible_audio_player_english_folders_numbers(
    download_folders_fcbh_underscore,
    numbers_s,
    (file_path, n) => {
      let file_name = path_parse_base(file_path);
      return (
        !string_includes(file_name, "_____") &&
        bible_audio_player_fcbh_starts_with(file_path, n)
      );
    },
  );
  let download_folders_fcbh = [
    "ENGNLTO2DA",
    "ENGNRSO2DA",
    "ENGCAVN2DA",
    "ENGESHN1DA",
    "EN1WEBN2DA",
    "ENGNRSN2DA",
    "ENGESVO1DA",
    "ENGNLVN2DA",
    "ENGESHN1DA",
    "EN1WEBO2DA",
    "ENGCEVN2DA",
    "ENGESVN1DA",
    "ENGNKJN1DA",
    "ENGNLHN1DA",
    "ENGWEBN2DA",
    "ENGNLTN2DA",
    "ENGNLVN1DA",
    "ENGNRSN1DA",
  ];
  await bible_audio_player_english_folders_numbers(
    download_folders_fcbh,
    numbers_s,
    bible_audio_player_fcbh_starts_with,
  );
  let download_folders_regular_nt = ["all_files_english_contemporary", "rsv"];
  await bible_audio_player_english_folders_numbers(
    download_folders_regular_nt,
    numbers_nt,
    path_parse_base_starts_with,
  );
  let download_folders_regular = [
    "WEBD_OT",
    "WEBD_NT",
    "00_NHEBI_OT_Audio_Complete",
    "00_NHEBI_NT_Audio_Complete",
    "BBE_NewTestamentAudio_Australia",
    "niv_mp3_bible_new_international_version",
    "00_Bible in Basic English Old Testament Audio MP3 Files",
    "00_Bible in Basic English New Testament Audio MP3 Files",
  ];
  await bible_audio_player_english_folders_numbers(
    download_folders_fcbh,
    numbers_s,
    path_parse_base_starts_with,
  );
  await each_async(download_folders_regular, async (download_folder) => {
    await bible_audio_player_english(
      download_folder,
      string_includes_curry_right(book_from),
    );
  });
  let download_folders_regular_computer_voice = [
    "NHEB_NT_audio",
    "NHEB_OT_audio",
  ];
  let download_folder_acronymns_computer_voice = "BBEM_complete";
}
