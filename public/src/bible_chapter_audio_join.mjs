import { path_join } from "./path_join.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { bible_chapter_audio_download_folder_name } from "./bible_chapter_audio_download_folder_name.mjs";
import { bible_chapter_audio_download_prefix } from "./bible_chapter_audio_download_prefix.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { equal_json } from "./equal_json.mjs";
import { assert } from "./assert.mjs";
import { bible_chapter_audio_trim } from "./bible_chapter_audio_trim.mjs";
import { each_async } from "./each_async.mjs";
import { file_overwrite_wav } from "./file_overwrite_wav.mjs";
import { file_read_wav } from "./file_read_wav.mjs";
import { file_exists } from "./file_exists.mjs";
export async function bible_chapter_audio_join(bible_folder, chapter_name) {
  let prefix = bible_chapter_audio_download_prefix(
    bible_chapter_audio_download_folder_name(),
    chapter_name,
  );
  let outpath_path = path_join([folder_gitignore_path(prefix), "joined.wav"]);
  if (await file_exists(outpath_path)) {
    return;
  }
  let downloads = await bible_chapter_audio_trim(bible_folder, chapter_name);
  let fmt_first = null;
  let samples_out = [];
  await each_async(downloads, async (download) => {
    let { path } = download;
    let { trimmed } = path;
    let w = await file_read_wav(trimmed);
    let { samples, fmt } = w;
    if (fmt_first === null) {
      fmt_first = fmt;
    } else {
      assert(equal_json, [fmt, fmt_first]);
    }
    list_add_multiple(samples_out, samples);
  });
  await file_overwrite_wav(fmt, samples_out, folder_gitignore_path(prefix));
  return downloads;
}
