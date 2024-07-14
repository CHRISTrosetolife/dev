import { log } from "./log.mjs";
import { video_concat } from "./video_concat.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { string_case_upper_first } from "./string_case_upper_first.mjs";
import { bible_book_name } from "./bible_book_name.mjs";
import { string_trim_front } from "./string_trim_front.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { each_async } from "./each_async.mjs";
import { bible_image_resolutions } from "./bible_image_resolutions.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { file_exists } from "./file_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_chapter_videos } from "./bible_chapter_videos.mjs";
import { list_map } from "./list_map.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_chapter_video(
  project_name,
  bible_folder,
  chapter_name,
) {
  let overwrite = false;
  let hvs = bible_image_resolutions();
  let videos = await bible_chapter_videos(
    project_name,
    bible_folder,
    chapter_name,
  );
  await each_async(hvs, async (hv) => {
    let hv_name = object_property_get(hv, "name");
    let output_path_folder = folder_gitignore_path(
      path_join(["video", bible_folder]),
    );
    let { book_code, chapter_code } = bible_chapter_name_parse(chapter_name);
    let chapter_number = string_trim_front(chapter_code, "0");
    let output_file_name = string_combine_multiple([
      bible_book_name(book_code),
      " ",
      chapter_number,
      " - Audio Bible - Dramatic - Berean Standard Bible BSB - Human - ",
      string_case_upper_first(hv_name),
      ".mp4",
    ]);
    let output_path = path_join([output_path_folder, output_file_name]);
    if (!overwrite) {
      if (await file_exists(output_path)) {
        return;
      }
    }
    let m = list_map(videos, async (v) => ({
      fileName: await path_resolve(
        object_property_get(object_property_get(v, "path"), hv_name),
      ),
    }));
    log({
      fn: bible_chapter_video.name,
      hv,
      bible_folder,
      chapter_name,
    });
    await video_concat(output_path, m);
  });
}
