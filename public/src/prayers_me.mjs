import { prayers_heal_me } from "./prayers_heal_me.mjs";
import { string_prefix_and } from "./string_prefix_and.mjs";
import { prayers_bbw } from "./prayers_bbw.mjs";
import { prayers_list_generic_5 } from "./prayers_list_generic_5.mjs";
export function prayers_me() {
  let v = [
    prayers_heal_me(),
    "May my muscles grow",
    prayers_list_generic_5(
      [
        "the works of Christians, including mine",
        "my word of God singing and speaking",
        "my programming, including speed",
        "Christian websites, apps and programming, including mine",
        "my teaching",
        "my proofs",
        "my thinking",
        "my work, including any job search",
        "any organization or business of mine",
        "any leadership I have",
      ],
      prayers_bbw,
      string_prefix_and,
    ),
    prayers_bbw("my music, inlcuding songs, composing, improvising and piano"),
  ];
  return v;
}
