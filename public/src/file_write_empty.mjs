import { file_write } from "./file_write.mjs";
export async function file_write_empty(file_path) {
  let v = await file_write(file_path, "");
  return v;
}
