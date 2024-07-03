import video_stitch from "video-stitch";
export function bible_chapter_video(project_name, bible_folder, chapter_name) {
  video_stitch.concat;
  return new Promise((resolve) => {
    videoConcat({
      silent: true,
      overwrite: false,
    })
      .clips([
        {
          fileName: "FILENAME",
        },
        {
          fileName: "FILENAME",
        },
        {
          fileName: "FILENAME",
        },
      ])
      .output("myfilename")
      .concat();
  });
}
