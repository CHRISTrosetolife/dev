import { png_read } from "./png_read.mjs";
import { png_overwrite } from "./png_overwrite.mjs";
export async function png_transform(path_in, path_out, transform) {
  let image = await png_read(path_in);
  await transform(image);
  await png_overwrite(path_out, image);
}
