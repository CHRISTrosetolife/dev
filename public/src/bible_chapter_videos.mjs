import { object_property_get } from "./object_property_get.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { list_zip } from "./list_zip.mjs";
import { bible_chapter_audio_trim } from "./bible_chapter_audio_trim.mjs";
import { bible_chapter_folder_parent_gitignore } from "./bible_chapter_folder_parent_gitignore.mjs";
import { bible_chapter_images } from "./bible_chapter_images.mjs";
import videoshow from "videoshow";
import { path_join } from "./path_join.mjs";
import { list_first } from "./list_first.mjs";
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
  let verses = await bible_chapter(bible_folder, chapter_name);
  let images = await bible_chapter_images(bible_folder, chapter_name);
  let audios = await bible_chapter_audio_trim(
    project_name,
    bible_folder,
    chapter_name,
  );
  let zipped = list_zip([verses, images, audios]);
  let [verse, image, audio] = list_first(zipped);
  return z;
  return new Promise((resolve, reject) => {
    videoshow([image.path.vertical])
      .audio(audio.path.trimmed)
      .save(
        path_join([
          output_path_folder,
          object_property_get(object, property_name),
          "vertical.mp4",
        ]),
      )
      .on("error", function (e) {
        reject(e);
      })
      .on("end", function () {
        resolve();
      });
  });
}
