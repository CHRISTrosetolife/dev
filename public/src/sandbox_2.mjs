import { png_transform } from "./png_transform.mjs";
import { folder_read } from "./folder_read.mjs";
export async function sandbox_2() {
  let path_in = "public\\img\\shubibubi\\animals\\";
  let tile_size = 32;
  let rows_count = 5;
  let columns_count = 4;
  let files = await folder_read(path_in, ".png");
  return;
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
