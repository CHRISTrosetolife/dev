import { folder_external_root_combine } from "./folder_external_root_combine.mjs";
export function folder_gitignore() {
  let folder = "gitignore";
  let v = folder_external_root_combine(folder);
  return v;
}
