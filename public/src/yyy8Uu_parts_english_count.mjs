import { file_exists } from "./file_exists.mjs";
import { yyy8Uu_part } from "./yyy8Uu_part.mjs";
import { function_cache_path } from "./function_cache_path.mjs";
export async function yyy8Uu_parts_english_count(index) {
  let index2 = 0;
  while (true) {
    let fcp = function_cache_path(yyy8Uu_part.name, [index, index2]);
    if (!(await file_exists(fcp))) {
      break;
    }
    index2++;
  }
  return index2;
}
