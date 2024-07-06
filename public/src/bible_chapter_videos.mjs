import { each_async } from "./each_async.mjs";
import { bible_image_resolutions } from "./bible_image_resolutions.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { list_zip } from "./list_zip.mjs";
import { bible_chapter_audio_trim } from "./bible_chapter_audio_trim.mjs";
import { bible_chapter_folder_parent_gitignore } from "./bible_chapter_folder_parent_gitignore.mjs";
import { bible_chapter_images } from "./bible_chapter_images.mjs";
import videoshow from "videoshow";
import { path_join } from "./path_join.mjs";
import { getAudioDurationInSeconds } from "get-audio-duration";
import { file_exists } from "./file_exists.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { object_merge } from "./object_merge.mjs";
export async function bible_chapter_videos(
  project_name,
  bible_folder,
  chapter_name,
) {
  let overwrite = false;
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
  let hvs = bible_image_resolutions();
  let zipped = list_zip([verses, images, audios]);
  return await list_map_async(zipped, async (z) => {
    let [verse, image, audio] = z;
    let result_path = {};
    let result = {
      path: result_path,
    };
    await each_async(hvs, async (hv) => {
      let hv_name = object_property_get(hv, "name");
      let output_path = path_join([
        output_path_folder,
        object_property_get(verse, "verse_number"),
        string_combine_multiple([hv_name, ".mp4"]),
      ]);
      object_merge(result_path, {
        [hv_name]: output_path,
      });
      if (!overwrite) {
        if (await file_exists(output_path)) {
          return result;
        }
      }
      log({
        hv,
        verse,
      });
      await folder_parent_exists_ensure(output_path);
      let audio_path_trimmed = audio.path.trimmed;
      let audio_duration = await getAudioDurationInSeconds(audio_path_trimmed);
      await new Promise((resolve, reject) => {
        videoshow([object_property_get(image.path, hv_name)], {
          disableFadeOut: true,
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
    });
    return result;
  });
}
