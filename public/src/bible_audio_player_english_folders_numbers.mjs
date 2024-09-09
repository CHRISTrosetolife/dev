import { list_adder } from "./list_adder.mjs";
import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_audio_player_english_folders_numbers(
  download_folders,
  numbers_s,
  filter,
) {
  list_adder((la) => {});
  await each_async(download_folders, async (download_folder) => {
    await each_async(numbers_s, async (n) => {
      await bible_audio_player_english(download_folder, (file_path) =>
        filter(file_path, n),
      );
    });
  });
}
