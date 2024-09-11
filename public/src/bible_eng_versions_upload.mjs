import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
export async function bible_eng_versions_upload() {
  await bible_eng_versions_each();
}
