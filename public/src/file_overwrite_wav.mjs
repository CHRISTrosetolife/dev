import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
import wavefile from "wavefile";
export async function file_overwrite_wav(fmt, samples_out, path_trimmed) {
  let o = new WaveFile();
  o.fromScratch(
    fmt.numChannels,
    fmt.sampleRate,
    fmt.bitsPerSample,
    samples_out,
  );
  await file_overwrite_binary(path_trimmed, o.toBuffer());
}
