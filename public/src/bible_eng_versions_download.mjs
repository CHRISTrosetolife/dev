import { bible_versions_download } from "./bible_versions_download.mjs";
import { bible_eng_versions } from "./bible_eng_versions.mjs";
export async function bible_eng_versions_download() {
  let bible_folders = bible_eng_versions();
  await bible_versions_download(bible_folders);
}
