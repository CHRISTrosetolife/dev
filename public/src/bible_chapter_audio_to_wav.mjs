import { log } from "./log.mjs";
import { bible_chapter_audio_download } from "./bible_chapter_audio_download.mjs";
import { list_first } from "./list_first.mjs";
import ffmpeg from "fluent-ffmpeg";
export async function bible_chapter_audio_to_wav(bible_folder, chapter_name) {
  let file_names = await bible_chapter_audio_download(
    bible_folder,
    chapter_name,
  );
  let first = list_first(file_names);
  ffmpeg(track)
    .toFormat("wav")
    .on("error", (err) => {
      console.log("An error occurred: " + err.message);
    })
    .on("progress", (progress) => {
      console.log("Processing: " + progress.targetSize + " KB converted");
    })
    .on("end", () => {
      console.log("Processing finished !");
    })
    .save("./hello.wav");
}
