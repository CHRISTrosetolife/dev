import { bible_audio_player_output_path } from "./bible_audio_player_output_path.mjs";
import { uuid } from "./uuid.mjs";
import { folder_files_copy_generic } from "./folder_files_copy_generic.mjs";
import { path_join } from "./path_join.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function bible_audio_player_generic(
  path_language,
  download_folder,
  filter,
) {
  let from = path_join([path_language, download_folder]);
  return from;
  let to = bible_audio_player_output_path();
  let extension = ".mp3";
  await folder_files_copy_generic(from, extension, to, filter, async (to) => {
    let without = string_suffix_without(to, extension);
    let with_id = string_combine_multiple([
      without,
      "_",
      await uuid(),
      extension,
    ]);
    return with_id;
  });
}
