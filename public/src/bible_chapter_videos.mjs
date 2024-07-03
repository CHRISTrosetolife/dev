import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { list_zip } from "./list_zip.mjs";
import { bible_chapter_audio_trim } from "./bible_chapter_audio_trim.mjs";
import { bible_chapter_folder_parent_gitignore } from "./bible_chapter_folder_parent_gitignore.mjs";
import { bible_chapter_images } from "./bible_chapter_images.mjs";
import videoshow from "videoshow";
import { path_join } from "./path_join.mjs";
import { list_first } from "./list_first.mjs";
import { getAudioDurationInSeconds } from "get-audio-duration";
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
  let output_path = path_join([
    output_path_folder,
    object_property_get(verse, "verse_number"),
    "vertical.mp4",
  ]);
  await folder_parent_exists_ensure(output_path);
  let audio_path_trimmed = audio.path.trimmed;
  let audio_duration = getAudioDurationInSeconds(audio_path_trimmed);
  return new Promise((resolve, reject) => {
    videoshow([image.path.vertical], {
      loop: audio_duration,
    })
      .audio(audio_path_trimmed, {
        fade: false,
      })
      .save(output_path)
      .on("error", function (e) {
        reject(e);
      })
      .on("end", function () {
        resolve();
      });
  });
}
