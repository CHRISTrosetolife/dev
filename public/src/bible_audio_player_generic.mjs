import { bible_audio_player_drive_letter } from "./bible_audio_player_drive_letter.mjs";
import { folder_read_filter } from "./folder_read_filter.mjs";
import { uuid } from "./uuid.mjs";
import { folder_files_copy_generic } from "./folder_files_copy_generic.mjs";
import { path_join } from "./path_join.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { path_drive } from "./path_drive.mjs";
export async function bible_audio_player_generic(
  path_language,
  download_folder,
  filter,
) {
  let drive_letter = bible_audio_player_drive_letter();
  let from = path_join([path_language, download_folder]);
  let extension = ".mp3";
  let filtered = await folder_read_filter(from, extension, filter);
  await folder_files_copy_generic(
    from,
    extension,
    path_drive(drive_letter),
    filter,
    async function (to) {
      let without = string_suffix_without(to, extension);
      let with_id = string_combine_multiple([
        without,
        "_",
        await uuid(),
        extension,
      ]);
      return with_id;
    },
  );
}
