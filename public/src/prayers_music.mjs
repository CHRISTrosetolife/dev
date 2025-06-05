import { prayers_bbw } from "./prayers_bbw.mjs";
import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { string_prefix_and } from "./string_prefix_and.mjs";
import { prayers_list_generic } from "./prayers_list_generic.mjs";
export function prayers_music() {
  let v = [
    "Hillsong",
    "Cityalight",
    "Wickham",
    "Tomlin",
    "Redman",
    "Lauren Daigle",
    "Brooke Ligertwood",
    "Elevation",
    "Tauren Wells",
    "Big Daddy Weave",
    "Maverick City",
    "Tenth Avenue North",
    "MercyMe",
    "Brandon Lake",
    "Damascus Worship",
    "Amanda Cook",
    "Jenn Johnson",
    "Bethel",
    "Micah Tyler",
    "We Are Messengers",
    "Vertical Worship",
    "NEEDTOBREATHE",
  ];
  let v2 = prayers_list_generic(v, prayers_bbw, string_prefix_and);
  let v3 = [prayers_sabbw(":"), v2];
  return v3;
}
