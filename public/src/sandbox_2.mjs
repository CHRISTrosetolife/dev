import { path_dirname } from "./path_dirname.mjs";
import { png_read } from "./png_read.mjs";
import { png_transform } from "./png_transform.mjs";
export async function sandbox_2() {
  let path_in = "public\\img\\shubibubi\\animals\\bunny.png";
  let tile_size = 32;
  let d = path_dirname(path_in);
  let i = await png_read(path_in);
  let { height, width } = i;
  await png_transform(path_in, path_out, transform);
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
