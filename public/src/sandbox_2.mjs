import { bible_image_path } from "./bible_image_path.mjs";
export function sandbox_2() {
  videoshow([bible_image_path()])
    .save("video.mp4")
    .on("error", function () {})
    .on("end", function () {});
}
