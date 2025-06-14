import { prayers_list_generic_5 } from "./prayers_list_generic_5.mjs";
import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { string_prefix_and } from "./string_prefix_and.mjs";
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
  let v2 = prayers_list_generic_5(v, prayers_sabbw, string_prefix_and);
  return v2;
}
