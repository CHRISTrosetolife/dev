import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_audio_player_english_folders_numbers(
  download_folders_fcbh_underscore,
  numbers_s,
  filter,
) {
  await each_async(
    download_folders_fcbh_underscore,
    async (download_folder) => {
      await each_async(numbers_s, async (n) => {
        await bible_audio_player_english(download_folder, filter);
      });
    },
  );
}
