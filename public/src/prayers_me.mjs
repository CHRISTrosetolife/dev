import { prayers_heal_me } from "./prayers_heal_me.mjs";
import { string_prefix_and } from "./string_prefix_and.mjs";
import { prayers_bbw } from "./prayers_bbw.mjs";
import { prayers_list_generic_5 } from "./prayers_list_generic_5.mjs";
export function prayers_me() {
  let v = [
      "If it means not sinning, take anything away, do anything",
      "Cause me to never be hospitalized again, never be in therapy again and desire your desire for my lifespan",
      "Cause me to either speak perfectly or be silent",
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
    prayers_bbw("my music, including songs, composing, improvising and piano"),
    "If it means forgiveness, may I forget",
    "May I have no memory of nor desire for A or any others",
    "Thank You for love",
  ];
  return v;
}
