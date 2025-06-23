import { prayers_orphans_widows_unstained_world } from "./prayers_orphans_widows_unstained_world.mjs";
import { prayers_religions } from "./prayers_religions.mjs";
import { prayers_big } from "./prayers_big.mjs";
import { prayers_love } from "./prayers_love.mjs";
import { string_case_upper_first } from "./string_case_upper_first.mjs";
import { list_map } from "./list_map.mjs";
import { prayers_countries } from "./prayers_countries.mjs";
import { prayers_famous } from "./prayers_famous.mjs";
import { prayers_family } from "./prayers_family.mjs";
import { list_denest } from "./list_denest.mjs";
export function prayers() {
  let v = list_denest([
    "Cause me to perfectly and maximally glorify and obey the Father, Jesus and the Holy Spirit",
    "May the words of my mouth and the meditation of my heart be pleasing in your sight, O Lord, my Rock and my Redeemer",
    "May I fulfill my ministry",
    "Thank You",
    prayers_love(),
    prayers_family(),
    prayers_countries(),
    prayers_orphans_widows_unstained_world(),
    prayers_big(),
    prayers_famous(),
    prayers_religions(),
  ]);
  let v2 = list_map(v, string_case_upper_first);
  return v2;
}
