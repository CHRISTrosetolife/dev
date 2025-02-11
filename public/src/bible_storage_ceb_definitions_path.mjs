import { path_join } from "./path_join.mjs";
export function bible_storage_ceb_definitions_path(
  bible_version,
  chapter_code,
) {
  return path_join([bible_version, chapter_code]);
}
