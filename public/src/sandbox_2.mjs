import { png_slice_tiles } from "./png_slice_tiles.mjs";
export async function sandbox_2() {
  let path_in = "public\\img\\shubibubi\\animals\\";
  let rows_count = 5;
  let columns_count = 4;
  let tile_size = 32;
  await png_slice_tiles(path_in, tile_size);
}
