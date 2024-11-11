import { log } from "./log.mjs";
import { file_copy_closed_if_exists_not } from "./file_copy_closed_if_exists_not.mjs";
import { bible_audio_player_english_path } from "./bible_audio_player_english_path.mjs";
import { path_join } from "./path_join.mjs";
import { file_copy_path } from "./file_copy_path.mjs";
import { string_size } from "./string_size.mjs";
import { string_skip } from "./string_skip.mjs";
import { string_last_index } from "./string_last_index.mjs";
import { string_slash_encoded } from "./string_slash_encoded.mjs";
import { bible_audio_download_mp3 } from "./bible_audio_download_mp3.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_audio_download_mp3_multiple(
  prefix_url,
  versions,
  mapper_name,
  mapper_version,
) {
  await each_async(versions, async (version) => {
    let chapter_paths = await bible_audio_download_mp3(prefix_url, version);
    await each_async(chapter_paths, async (chapter_path) => {
      let s = string_slash_encoded();
      let i = string_last_index(chapter_path, s);
      let remaining = string_skip(chapter_path, i + string_size(s));
      remaining = mapper_name(remaining);
      let p = file_copy_path(
        remaining,
        path_join([bible_audio_player_english_path(), mapper_version(version)]),
      );
      await file_copy_closed_if_exists_not(p, chapter_path);
    });
  });
}
