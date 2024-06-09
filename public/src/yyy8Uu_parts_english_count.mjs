import { yyy8Uu_language_to } from "./yyy8Uu_language_to.mjs";
import { yyy8Uu_language_from } from "./yyy8Uu_language_from.mjs";
import { gcloud_translate } from "./gcloud_translate.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
import { yyy8Uu_part } from "./yyy8Uu_part.mjs";
import { function_cache_path } from "./function_cache_path.mjs";
export async function yyy8Uu_parts_english_count(index) {
  let index2 = 0;
  while (true) {
    let fcp = function_cache_path(gcloud_translate.name, [
      yyy8Uu_language_from(),
      yyy8Uu_language_to(),
      yyy8Uu_part.name,
      [index, index2],
    ]);
    if (await file_exists_not(fcp)) {
      break;
    }
    index2++;
  }
  return index2;
}
