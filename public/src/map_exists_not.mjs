import { map_exists } from "./map_exists.mjs";
export function map_exists_not(map, key) {
  let v = !map_exists(map, key);
  return v;
}
