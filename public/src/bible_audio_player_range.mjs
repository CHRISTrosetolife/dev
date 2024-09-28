import { log } from "./log.mjs";
import { list_wait_ordered } from "./list_wait_ordered.mjs";
import { drive_format } from "./drive_format.mjs";
import { drive_remove } from "./drive_remove.mjs";
import { bible_book_prefix_to_number } from "./bible_book_prefix_to_number.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { number_pad_2 } from "./number_pad_2.mjs";
import { list_map_number_pad_2 } from "./list_map_number_pad_2.mjs";
import { bible_audio_player_unzip } from "./bible_audio_player_unzip.mjs";
import { path_parse_base_starts_with } from "./path_parse_base_starts_with.mjs";
import { string_includes } from "./string_includes.mjs";
import { path_parse_base } from "./path_parse_base.mjs";
import { bible_audio_player_english_folders_numbers } from "./bible_audio_player_english_folders_numbers.mjs";
import { bible_books_old_count } from "./bible_books_old_count.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { range_from } from "./range_from.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { assert } from "./assert.mjs";
export async function bible_audio_player_range(book_from, book_to) {
  let disk_format_eject = false;
  await bible_audio_player_unzip();
  let drive_letter = "E";
  if (disk_format_eject) {
    await drive_format(drive_letter);
  }
  let bible_folder = "engbsb";
  let number_from = await bible_book_prefix_to_number(bible_folder, book_from);
  let number_to = await bible_book_prefix_to_number(bible_folder, book_to);
  assert(less_than_equal, [number_from, number_to]);
  let numbers = range_from(number_from, number_to);
  let numbers_s = list_map_number_pad_2(numbers);
  let numbers_nt_filtered = list_filter(
    numbers,
    (n) => n >= bible_books_old_count() + 1,
  );
  let numbers_nt = list_map(
    numbers_nt_filtered,
    (n) => n - bible_books_old_count(),
  );
  let numbers_fcbh = list_map(numbers_s, (n) => {
    if (n > bible_books_old_count()) {
      return "B" + number_pad_2(n - bible_books_old_count());
    }
    return "A" + number_pad_2(n);
  });
  let numbers_nt_s = list_map_number_pad_2(numbers_nt);
  let download_folders_fcbh_underscore = ["ENGESVO2DA", "ENGESVN2DA"];
  let promises = [];
  bible_audio_player_english_folders_numbers(
    download_folders_fcbh_underscore,
    numbers_fcbh,
    (file_path, n) => {
      let file_name = path_parse_base(file_path);
      return (
        !string_includes(file_name, "_____") &&
        path_parse_base_starts_with(file_path, n)
      );
    },
    promises,
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
  bible_audio_player_english_folders_numbers(
    download_folders_fcbh,
    numbers_fcbh,
    path_parse_base_starts_with,
    promises,
  );
  let download_folders_regular_nt = ["all_files_english_contemporary", "rsv"];
  bible_audio_player_english_folders_numbers(
    download_folders_regular_nt,
    numbers_nt_s,
    path_parse_base_starts_with,
    promises,
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
  bible_audio_player_english_folders_numbers(
    download_folders_regular,
    numbers_s,
    path_parse_base_starts_with,
    promises,
  );
  list_shuffle(promises);
  log({
    promises,
  });
  await list_wait_ordered(promises);
  let download_folders_regular_computer_voice = [
    "NHEB_NT_audio",
    "NHEB_OT_audio",
  ];
  let download_folder_acronymns_computer_voice = "BBEM_complete";
  if (disk_format_eject) {
    await drive_remove(drive_letter);
  }
}
