import { each_index } from "./each_index.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { each_range } from "./each_range.mjs";
import { png_transform } from "./png_transform.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { mod } from "./mod.mjs";
import { equal } from "./equal.mjs";
import { assert_message } from "./assert_message.mjs";
import { each } from "./each.mjs";
import { png_read } from "./png_read.mjs";
import { path_extname } from "./path_extname.mjs";
import { path_parse_name } from "./path_parse_name.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { each_async } from "./each_async.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
export async function png_slice_generic(
  path_in,
  rows_count,
  columns_count,
  tile_size_use,
  tile_size,
) {
  let folder_out = "sliced";
  let files = await folder_read_shallow(path_in, ".png");
  await each_async(files, async (file) => {
    let d = path_dirname(file);
    let n = path_parse_name(file);
    let e = path_extname(file);
    let i = await png_read(file);
    let { height, width } = i;
    if (tile_size_use) {
      each([width, height], (wh) => {
        assert_message(equal, [mod(wh, tile_size), 0], () => ({
          file,
        }));
      });
      rows_count = height / tile_size;
      columns_count = width / tile_size;
    }
    let height_unit = height / rows_count;
    let width_unit = width / columns_count;
    assert_message(equal, [mod(width, columns_count), 0], () => ({
      file,
    }));
    assert_message(equal, [mod(height, rows_count), 0], () => ({
      file,
    }));
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
              let x_offset = add(x, c * width_unit);
              let idx = (image.width * y_offset + x_offset) << 2;
              each_range(4, (idx_offset) =>
                list_add(image_out, image.data[add(idx, idx_offset)]),
              );
            });
          });
          image.width = width_unit;
          image.height = height_unit;
          each_index(image_out, (value, a) => {
            image.data[a] = value;
          });
        });
        index++;
      });
    });
  });
}
