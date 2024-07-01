import { each_async } from "./each_async.mjs";
import { file_overwrite_wav } from "./file_overwrite_wav.mjs";
import { file_read_wav } from "./file_read_wav.mjs";
import { each_index } from "./each_index.mjs";
import { list_threshold_index_reverse } from "./list_threshold_index_reverse.mjs";
import { list_threshold_index } from "./list_threshold_index.mjs";
import { bible_chapter_audio_to_wav_path } from "./bible_chapter_audio_to_wav_path.mjs";
import { string_suffix_change } from "./string_suffix_change.mjs";
import { bible_chapter_audio_to_wav } from "./bible_chapter_audio_to_wav.mjs";
import { list_add } from "./list_add.mjs";
import { object_merge } from "./object_merge.mjs";
export async function bible_chapter_audio_trim(bible_folder, chapter_name) {
  let downloads = await bible_chapter_audio_to_wav(bible_folder, chapter_name);
  await each_async(downloads, async (download) => {
    let { path } = download;
    let { wav } = path;
    let path_trimmed = string_suffix_change(
      wav,
      bible_chapter_audio_to_wav_path(),
      "trimmed.wav",
    );
    let w = await file_read_wav(wav);
    let { samples, fmt } = w;
    let samples_out = [];
    let first = list_threshold_index(samples, 400);
    let last = list_threshold_index_reverse(samples, 5000);
    each_index(samples, (item, index) => {
      if (first <= index && index <= last) {
        list_add(samples_out, item);
      }
    });
    await file_overwrite_wav(fmt, samples_out, path_trimmed);
    object_merge(path, {
      trimmed: path_trimmed,
    });
  });
  return downloads;
}
