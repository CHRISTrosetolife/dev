import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_to } from "./list_to.mjs";
import { file_read_binary } from "./file_read_binary.mjs";
import { import_node } from "./import_node.mjs";
export async function file_read_wav(input_path) {
  let wavefile = await import_node("wavefile-reader");
  let d = object_property_get(wavefile, "default");
  let WaveFileReader = object_property_get(d, "WaveFileReader");
  let w = new WaveFileReader();
  w.fromBuffer(await file_read_binary(input_path));
  let { fmt } = w;
  let samples = list_to(w.data.samples);
  return {
    fmt,
    samples,
  };
}
