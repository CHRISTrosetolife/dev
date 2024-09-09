import { unawait } from "./unawait.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
export async function bible_audio_player_english_folders_numbers(
  download_folders,
  numbers_s,
  filter,
) {
  list_adder((la) => {
    each(download_folders, (download_folder) => {
      each(numbers_s, async (n) => {
        unawait(() => {});
        await bible_audio_player_english(download_folder, (file_path) =>
          filter(file_path, n),
        );
      });
    });
  });
}
