import { png_overwrite } from "./png_overwrite.mjs";
import fs from "fs";
import { PNG } from "pngjs";
export async function sandbox_2() {
  let output_file_path = "public\\img\\shubibubi\\animals\\bunny2.png";
  let input_file_path = "public\\img\\shubibubi\\animals\\bunny.png";
  fs.createReadStream(input_file_path)
    .pipe(
      new PNG({
        filterType: 4,
      }),
    )
    .on("parsed", async function () {
      let image = this;
      transform(image);
      await png_overwrite(output_file_path, image);
    });
  function transform(image) {
    image.height = image.height / 4;
    for (var y = 0; y < image.height; y++) {
      for (var x = 0; x < image.width; x++) {
        var idx = (image.width * y + x) << 2;
        image.data[idx] = 255 - image.data[idx];
        image.data[idx + 1] = 255 - image.data[idx + 1];
        image.data[idx + 2] = 255 - image.data[idx + 2];
        image.data[idx + 3] = image.data[idx + 3] >> 1;
      }
    }
  }
}
