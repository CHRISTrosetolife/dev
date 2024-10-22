import { object_property_get } from "./object_property_get.mjs";
import { import_node } from "./import_node.mjs";
import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
export async function file_overwrite_wav(fmt, samples, path_output) {
  let wavefile = await import_node("wavefile");
  let d = object_property_get(wavefile, "default");
  let { WaveFile } = d;
  let o = new WaveFile();
  o.fromScratch(fmt.numChannels, fmt.sampleRate, fmt.bitsPerSample, samples);
  await file_overwrite_binary(path_output, o.toBuffer());
}
