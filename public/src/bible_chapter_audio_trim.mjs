import { file_read_wav } from "./file_read_wav.mjs";
import { each_index } from "./each_index.mjs";
import { list_threshold_index_reverse } from "./list_threshold_index_reverse.mjs";
import { list_threshold_index } from "./list_threshold_index.mjs";
import { bible_chapter_audio_to_wav_path } from "./bible_chapter_audio_to_wav_path.mjs";
import { string_suffix_change } from "./string_suffix_change.mjs";
import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
import { bible_chapter_audio_to_wav } from "./bible_chapter_audio_to_wav.mjs";
import { list_first } from "./list_first.mjs";
import wavefile from "wavefile";
import { list_add } from "./list_add.mjs";
export async function bible_chapter_audio_trim(bible_folder, chapter_name) {
  let downloads = await bible_chapter_audio_to_wav(bible_folder, chapter_name);
  let download = list_first(downloads);
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
  let o = new WaveFile();
  o.fromScratch(
    fmt.numChannels,
    fmt.sampleRate,
    fmt.bitsPerSample,
    samples_out,
  );
  await file_overwrite_binary(path_trimmed, o.toBuffer());
  return;
}
