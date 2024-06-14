import { png_transform } from "./png_transform.mjs";
import fs from "fs";
export async function sandbox_2() {
  let path_in = "public\\img\\shubibubi\\animals\\bunny.png";
  let path_out = "public\\img\\shubibubi\\animals\\bunny2.png";
  png_transform(path_in, path_out, transform);
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
