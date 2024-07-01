import { file_overwrite_generic } from "./file_overwrite_generic.mjs";
export async function file_overwrite_binary(output_path, data) {
  await file_overwrite_generic(output_path, data, "binary");
}
