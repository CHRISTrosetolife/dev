import { uuid } from "./uuid.mjs";
import { folder_files_copy_generic } from "./folder_files_copy_generic.mjs";
import { path_join } from "./path_join.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export async function bible_audio_player_generic(
  path_language,
  download_folder,
  filter,
) {
  let joined = path_join([path_language, download_folder]);
  let output = "E:\\";
  if (10) {
    output = "..\\bible\\english\\test";
  }
  await folder_files_copy_generic(
    joined,
    ".mp3",
    output,
    filter,
    async (to) => {
      let without = string_suffix_without(to, ".mp3");
      let with_id = to + (await uuid());
    },
  );
}
