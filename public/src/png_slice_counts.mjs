import { png_slice_generic } from "./png_slice_generic.mjs";
export async function png_slice_counts(path_in, rows_count, columns_count) {
  rows_count, columns_count;
  await png_slice_generic(path_in, rows_count, columns_count, false, -1);
}
