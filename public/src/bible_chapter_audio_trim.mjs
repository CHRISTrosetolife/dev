import { each_index } from "./each_index.mjs";
import { file_read_binary } from "./file_read_binary.mjs";
import { bible_chapter_audio_to_wav } from "./bible_chapter_audio_to_wav.mjs";
import { list_first } from "./list_first.mjs";
import wavefile from "wavefile";
export async function bible_chapter_audio_trim(bible_folder, chapter_name) {
  let downloads = await bible_chapter_audio_to_wav(bible_folder, chapter_name);
  let download = list_first(downloads);
  let { path } = download;
  let { wav } = path;
  let { WaveFile } = wavefile;
  let w = new WaveFile(await file_read_binary(wav));
  let samples = w.getSamples();
  let max_index = 0;
  let max = w.getSample(max_index);
  let maxes = [
    {
      value: max,
      index: max_index,
    },
  ];
  each_index(samples, (sample, index) => {});
}
