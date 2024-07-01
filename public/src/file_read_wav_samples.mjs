import { list_to } from "./list_to.mjs";
import { file_read_binary } from "./file_read_binary.mjs";
export async function file_read_wav_samples(input_path) {
  let { WaveFile } = wavefile;
  let w = new WaveFile(await file_read_binary(wav));
  let { fmt } = w;
  let samples = list_to(w.getSamples());
}
