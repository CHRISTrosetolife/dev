import { png_slice_generic } from "./png_slice_generic.mjs";
export async function sandbox_2() {
  let path_in = "public\\img\\shubibubi\\animals\\";
  let rows_count = 5;
  let columns_count = 4;
  let tile_size = 32;
  let tile_size_use = true;
  await png_slice_generic(
    path_in,
    rows_count,
    columns_count,
    tile_size_use,
    tile_size,
  );
}
