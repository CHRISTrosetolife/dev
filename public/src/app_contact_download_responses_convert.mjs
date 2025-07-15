import { object_properties_new } from "./object_properties_new.mjs";
import { list_map } from "./list_map.mjs";
export function app_contact_download_responses_convert(r) {
  return list_map(r, function (ri) {
    let v2 = object_properties_new(ri, ["message", "outputs", "valid"]);
    return v2;
  });
}
