import { object_property_set } from "./object_property_set.mjs";
import { bible_copyright } from "./bible_copyright.mjs";
export async function bible_eng_copyrights_generic(lambda_each) {
  let copyrights = {};
  await lambda_each(async function lambda(bible_folder) {
    let c = await bible_copyright(bible_folder);
    object_property_set(copyrights, bible_folder, c);
    return c;
  });
  return copyrights;
}
