import { list_join } from "./list_join.mjs";
export function path_join(paths) {
  let joined = list_join(paths, "/");
  return joined;
}
