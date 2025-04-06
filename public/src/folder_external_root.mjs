import { path_join } from "./path_join.mjs";
export function folder_external_root(folder) {
  let v = path_join(["D:", folder]);
  return v;
}
