import { file_exists } from "./file_exists.mjs";
export async function file_exists_not(fcp) {
  return !(await file_exists(fcp));
}
