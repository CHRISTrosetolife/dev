import { import_node } from "./import_node.mjs";
import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
export async function file_overwrite_wav(fmt, samples, path_output) {
  let wavefile = await import_node("wavefile");
  let { WaveFile } = wavefile;
  let o = new WaveFile();
  o.fromScratch(fmt.numChannels, fmt.sampleRate, fmt.bitsPerSample, samples);
  await file_overwrite_binary(path_output, o.toBuffer());
}
