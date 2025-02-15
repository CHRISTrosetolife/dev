import { assert_get_result } from "./assert_get_result.mjs";
export function map_get(map, key) {
  let v = map.get(key);
  let v2 = assert_get_result(v, key, map);
  return v2;
}
