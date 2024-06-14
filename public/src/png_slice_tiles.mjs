import { png_slice_generic } from "./png_slice_generic.mjs";
import { integer_parse } from "./integer_parse.mjs";
export async function png_slice_tiles(path_in, tile_size) {
  tile_size = integer_parse(tile_size);
  let tile_size_use = true;
  await png_slice_generic(path_in, -1, -1, tile_size_use, tile_size);
}
