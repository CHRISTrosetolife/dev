import { log } from "./log.mjs";
import { bible_audio_player_english_path } from "./bible_audio_player_english_path.mjs";
import { path_join } from "./path_join.mjs";
import { file_copy_path } from "./file_copy_path.mjs";
import { file_copy_closed } from "./file_copy_closed.mjs";
import { bible_audio_download_mp3 } from "./bible_audio_download_mp3.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_audio_download_divinerevelations() {
  let prefix_url =
    "https://www.divinerevelations.info/documents/bible/english_mp3_bible/";
  let versions = [
    "english_standard_version_v2",
    "english_new_revised_standard_version_drama",
    "english_contemporary_english_version_drama",
  ];
  await each_async(versions, async (version) => {
    let chapter_paths = await bible_audio_download_mp3(prefix_url, version);
    await each_async(chapter_paths, async (chapter_path) => {
      let p = file_copy_path(
        chapter_path,
        path_join([bible_audio_player_english_path(), version]),
      );
      log({
        p,
      });
      return;
      await file_copy_closed();
    });
  });
}
