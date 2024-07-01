import { import_node } from "./import_node.mjs";
import { bible_chapter_audio_to_wav } from "./bible_chapter_audio_to_wav.mjs";
import { list_first } from "./list_first.mjs";
import wavefile from "wavefile";
export async function bible_chapter_audio_trim(bible_folder, chapter_name) {
  let downloads = await bible_chapter_audio_to_wav(bible_folder, chapter_name);
  let download = list_first(downloads);
  let { path } = download;
  let { wav } = path;
  let { WaveFile } = wavefile;
  let fs = await import_node("fs");
  let buffer = await fs.promises.readFile(wav);
  let w = new WaveFile(buffer);
  return w;
}
