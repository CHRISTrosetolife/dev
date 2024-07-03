import { bible_chapter_audio_trim } from "./bible_chapter_audio_trim.mjs";
import { bible_chapter_folder_parent_gitignore } from "./bible_chapter_folder_parent_gitignore.mjs";
import { bible_chapter_images } from "./bible_chapter_images.mjs";
import { bible_image_path } from "./bible_image_path.mjs";
import videoshow from "videoshow";
import { path_join } from "./path_join.mjs";
export async function bible_chapter_videos(
  project_name,
  bible_folder,
  chapter_name,
) {
  let output_path_folder = bible_chapter_folder_parent_gitignore(
    "video",
    bible_folder,
    chapter_name,
  );
  let downloads = await bible_chapter_audio_trim(
    project_name,
    bible_folder,
    chapter_name,
  );
  let verses = await bible_chapter_images(bible_folder, chapter_name);
  return new Promise((resolve, reject) => {
    videoshow([bible_image_path()])
      .save(path_join([output_path_folder, "video.mp4"]))
      .on("error", function (e) {
        reject(e);
      })
      .on("end", function () {
        resolve();
      });
  });
}
