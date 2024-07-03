import { bible_image_resolutions } from "./bible_image_resolutions.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { log } from "./log.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { file_exists } from "./file_exists.mjs";
import { bible_chapter_folder_parent_gitignore } from "./bible_chapter_folder_parent_gitignore.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_chapter_videos } from "./bible_chapter_videos.mjs";
import video_stitch from "video-stitch";
import { list_map } from "./list_map.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_chapter_video(
  project_name,
  bible_folder,
  chapter_name,
) {
  let hvs = bible_image_resolutions();
  let hv_name = "vertical";
  let output_path_folder = bible_chapter_folder_parent_gitignore(
    "video",
    bible_folder,
    chapter_name,
  );
  let output_path = path_join([
    output_path_folder,
    string_combine_multiple([hv_name, ".mp4"]),
  ]);
  if (await file_exists(output_path)) {
    return;
  }
  let videos = await bible_chapter_videos(
    project_name,
    bible_folder,
    chapter_name,
  );
  let m = list_map(videos, (v) => ({
    fileName: path_resolve(
      object_property_get(object_property_get(v, "path"), hv_name),
    ),
  }));
  log("here");
  await video_stitch
    .concat({
      silent: false,
      overwrite: true,
    })
    .clips(m)
    .output(output_path)
    .concat();
}
