import { file_overwrite } from "./file_overwrite.mjs";
import { file_read } from "./file_read.mjs";
export async function file_transform(lambda, file_path, args) {
  let text = await file_read(file_path);
  let result = await lambda(text, ...args);
  await file_overwrite(file_path, text);
  return result;
}
