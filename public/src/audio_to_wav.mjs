import ffmpeg from "fluent-ffmpeg";
export async function audio_to_wav(path_input, path_output) {
  await new Promise(async (resolve, reject) => {
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
