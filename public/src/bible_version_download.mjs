import { bible_versions_download } from "./bible_versions_download.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function bible_version_download(bible_folder) {
  assert_arguments_length(arguments, 1);
  return await bible_versions_download([bible_folder]);
}
