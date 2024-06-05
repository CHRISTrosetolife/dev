import { file_copy_generic } from "./file_copy_generic.mjs";
export async function file_copy(file_name_from, file_name_to) {
  let open = true;
  await file_copy_generic(file_name_from, file_name_to, open);
}
