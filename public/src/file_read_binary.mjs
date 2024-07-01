import { file_read_generic } from "./file_read_generic.mjs";
export async function file_read_binary(file_name) {
  let encoding = "binary";
  return await file_read_generic(file_name, encoding);
}
