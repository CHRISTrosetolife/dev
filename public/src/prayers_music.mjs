import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { list_map } from "./list_map.mjs";
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
  let v2 = list_map(v, prayers_sabbw);
  return v2;
}
