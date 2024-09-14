import { bible_eng_versions_unused_each } from "./bible_eng_versions_unused_each.mjs";
import { bible_eng_copyrights_generic } from "./bible_eng_copyrights_generic.mjs";
export async function bible_eng_copyrights_unused() {
  let lambda_each = bible_eng_versions_unused_each;
  return await bible_eng_copyrights_generic(lambda_each);
}
