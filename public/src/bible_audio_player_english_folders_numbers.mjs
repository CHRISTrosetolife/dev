import { log } from "./log.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { bible_audio_player_english } from "./bible_audio_player_english.mjs";
export function bible_audio_player_english_folders_numbers(
  download_folders,
  numbers_s,
  filter,
  output,
) {
  let result = list_adder((la) => {
    each(download_folders, (download_folder) => {
      log({
        download_folder,
      });
      each(numbers_s, (n) => {
        log({
          n,
        });
        la(async () => {
          log("here");
          return await bible_audio_player_english(
            download_folder,
            (file_path) => filter(file_path, n),
          );
        });
      });
    });
  });
  list_add_multiple(output, result);
}
