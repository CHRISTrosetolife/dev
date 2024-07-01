import { file_exists } from "./file_exists.mjs";
import { assert_async } from "./assert_async.mjs";
import ffmpeg from "fluent-ffmpeg";
export async function audio_to_wav(path_input, path_output) {
  await new Promise(async (resolve, reject) => {
    await assert_async(file_exists, [path_input]);
    ffmpeg(path_input)
      .toFormat("wav")
      .on("error", (err) => {
        reject(err);
      })
      .on("end", () => {
        resolve();
      })
      .save(path_output);
  });
}
