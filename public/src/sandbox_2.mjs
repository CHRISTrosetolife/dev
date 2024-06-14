import { add } from "./add.mjs";
import { each_range } from "./each_range.mjs";
import { path_parse_name } from "./path_parse_name.mjs";
import { path_extname } from "./path_extname.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { mod } from "./mod.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { png_read } from "./png_read.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { png_transform } from "./png_transform.mjs";
import { folder_read } from "./folder_read.mjs";
import { each_async } from "./each_async.mjs";
import { path_join } from "./path_join.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function sandbox_2() {
  let path_in = "public\\img\\shubibubi\\animals\\";
  let folder_out = "sliced";
  let tile_size = 32;
  let rows_count = 5;
  let columns_count = 4;
  let files = await folder_read(path_in, ".png");
  await each_async(files, async (file) => {
    let d = path_dirname(file);
    let n = path_parse_name(file);
    let e = path_extname(file);
    let i = await png_read(file);
    let { height, width } = i;
    let height_unit = height / rows_count;
    let width_unit = width / columns_count;
    assert(equal, [mod(width, columns_count), 0]);
    assert(equal, [mod(height, rows_count), 0]);
    let index = 0;
    await each_range_async(rows_count, async (r) => {
      await each_range_async(columns_count, async (c) => {
        let path_out = path_join([
          d,
          folder_out,
          string_combine_multiple([n, "_", index, e]),
        ]);
        await png_transform(file, path_out, function transform(image) {
          let image_out = [];
          each_range(height_unit, (y) => {
            let y_offset = add(y, r * height_unit);
            each_range(width_unit, (x) => {
              let y_offset = add(x, c * height_unit);
              var idx = (image.width * y + x) << 2;
              image.data[idx] = 255 - image.data[idx];
              image.data[idx + 1] = 255 - image.data[idx + 1];
              image.data[idx + 2] = 255 - image.data[idx + 2];
              image.data[idx + 3] = image.data[idx + 3] >> 1;
            });
          });
        });
        index++;
      });
    });
  });
}
