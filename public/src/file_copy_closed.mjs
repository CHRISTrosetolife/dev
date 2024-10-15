import { file_copy_generic } from "./file_copy_generic.mjs";
export async function file_copy_closed(from, to_mapped) {
  await file_copy_generic(from, to_mapped, false);
}
