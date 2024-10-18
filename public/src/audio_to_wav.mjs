import { log } from "./log.mjs";
import { file_exists } from "./file_exists.mjs";
import { assert_async } from "./assert_async.mjs";
import { import_node } from "./import_node.mjs";
import { object_properties } from "./object_properties.mjs";
export async function audio_to_wav(path_input, path_output) {
  if (await file_exists(path_output)) {
    return;
  }
  await new Promise(async (resolve, reject) => {
    await assert_async(file_exists, [path_input]);
    let ffmpeg = await import_node("fluent-ffmpeg");
    log(object_properties(ffmpeg));
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
