import { each_range_async } from "./each_range_async.mjs";
import { mod } from "./mod.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { png_read } from "./png_read.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { png_transform } from "./png_transform.mjs";
import { folder_read } from "./folder_read.mjs";
import { each_async } from "./each_async.mjs";
export async function sandbox_2() {
  let path_in = "public\\img\\shubibubi\\animals\\";
  let folder_out = "sliced";
  let tile_size = 32;
  let rows_count = 5;
  let columns_count = 4;
  let files = await folder_read(path_in, ".png");
  await each_async(files, async (file) => {
    let d = path_dirname(file);
    let i = await png_read(file);
    let { height, width } = i;
    assert(equal, [mod(width, columns_count), 0]);
    assert(equal, [mod(height, rows_count), 0]);
    await each_range_async(rows_count, async (row) => {});
  });
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
