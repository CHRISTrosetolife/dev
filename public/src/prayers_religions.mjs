import { string_prefix_and } from "./string_prefix_and.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { prayers_sabbwa } from "./prayers_sabbwa.mjs";
export function prayers_religions() {
  return prayers_sabbwa(
    list_join_comma_space([
      "Jews",
      "descendants of Abraham",
      "Muslims",
      "Hindus",
      string_prefix_and("Buddhists"),
    ]),
  );
}
