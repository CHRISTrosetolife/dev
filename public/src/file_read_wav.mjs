import { list_to } from "./list_to.mjs";
import { file_read_binary } from "./file_read_binary.mjs";
import { import_node } from "./import_node.mjs";
export async function file_read_wav(input_path) {
  let wavefile = await import_node("wavefile");
  let { WaveFile } = wavefile;
  let w = new WaveFile(await file_read_binary(input_path));
  let { fmt } = w;
  let samples = list_to(w.getSamples());
  return {
    fmt,
    samples,
  };
}
