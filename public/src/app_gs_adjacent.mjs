import { abs } from "./abs.mjs";
import { list_any } from "./list_any.mjs";
export function app_gs_adjacent(a, b) {
  return list_any(
    [
      ["x", "y"],
      ["y", "x"],
    ],
    (both) => {
      [i, j] = both;
      abs(a[i] - b[i]) === 1 && abs(a[j] - b[j]) === 0;
    },
  );
}
