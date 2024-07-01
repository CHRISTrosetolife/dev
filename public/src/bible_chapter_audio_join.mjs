import { equal_json } from "./equal_json.mjs";
import { assert } from "./assert.mjs";
import { bible_chapter_audio_trim } from "./bible_chapter_audio_trim.mjs";
import { each_async } from "./each_async.mjs";
import { file_overwrite_wav } from "./file_overwrite_wav.mjs";
import { file_read_wav } from "./file_read_wav.mjs";
import { each_index } from "./each_index.mjs";
import { list_threshold_index_reverse } from "./list_threshold_index_reverse.mjs";
import { list_threshold_index } from "./list_threshold_index.mjs";
import { list_add } from "./list_add.mjs";
import { object_merge } from "./object_merge.mjs";
export async function bible_chapter_audio_join(bible_folder, chapter_name) {
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
    let first = list_threshold_index(samples, 400);
    let last = list_threshold_index_reverse(samples, 5000);
    each_index(samples, (item, index) => {
      if (first <= index && index <= last) {
        list_add(samples_out, item);
      }
    });
    object_merge(path, {
      trimmed: path_trimmed,
    });
  });
  await file_overwrite_wav(fmt, samples_out, path_trimmed);
  return downloads;
}
