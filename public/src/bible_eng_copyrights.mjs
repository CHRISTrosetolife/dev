import { bible_eng_copyrights_generic } from "./bible_eng_copyrights_generic.mjs";
import { bible_eng_versions_all_each } from "./bible_eng_versions_all_each.mjs";
export async function bible_eng_copyrights() {
  let lambda_each = bible_eng_versions_all_each;
  return await bible_eng_copyrights_generic(lambda_each);
}
