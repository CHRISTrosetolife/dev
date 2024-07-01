import { each_index } from "./each_index.mjs";
import { file_read_binary } from "./file_read_binary.mjs";
import { bible_chapter_audio_to_wav } from "./bible_chapter_audio_to_wav.mjs";
import { list_first } from "./list_first.mjs";
import wavefile from "wavefile";
import { list_add } from "./list_add.mjs";
import { list_last } from "./list_last.mjs";
export async function bible_chapter_audio_trim(bible_folder, chapter_name) {
  let downloads = await bible_chapter_audio_to_wav(bible_folder, chapter_name);
  let download = list_first(downloads);
  let { path } = download;
  let { wav } = path;
  let { WaveFile } = wavefile;
  let w = new WaveFile(await file_read_binary(wav));
  let { fmt } = w;
  let samples = w.getSamples();
  let maxes = [];
  let max_index = 0;
  max_add(maxes, w.getSample(max_index), max_index);
  each_index(samples, (sample, index) => {
    let max = list_last(maxes);
    if (sample > max.value) {
      max_add(maxes, sample, index);
    }
  });
  let samples_out = [];
  each_index(samples, (sample, index) => {
    if (index >= 17898) {
      list_add(samples_out, sample);
    }
  });
  let o = new WaveFile();
  o.fromScratch(fmt.numChannels, fmt.sampleRate, fmt.bitsPerSample, samples);
  return o;
  function max_add(maxes, value, index) {
    list_add(maxes, {
      value,
      index,
    });
  }
}
