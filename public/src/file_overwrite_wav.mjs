import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
import wavefile from "wavefile";
export async function file_overwrite_wav(fmt, samples, path_output) {
  let { WaveFile } = wavefile;
  let o = new WaveFile();
  o.fromScratch(fmt.numChannels, fmt.sampleRate, fmt.bitsPerSample, samples);
  await file_overwrite_binary(path_output, o.toBuffer());
}
