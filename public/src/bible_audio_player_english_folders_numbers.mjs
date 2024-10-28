import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function bible_audio_player_english_folders_numbers(
  download_folders,
  numbers_s,
  filter,
  output,
) {
  let result = await list_adder_async(async (la) => {
    await each_async(download_folders, async (download_folder) => {
      await each_async(numbers_s, async (n) => {
        la(
          await bible_audio_player_english(download_folder, (file_path) =>
            filter(file_path, n),
          ),
        );
      });
    });
  });
  log({
    result,
  });
  list_add_multiple(output, result);
}
