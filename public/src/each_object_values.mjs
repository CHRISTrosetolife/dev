import { object_values } from "./object_values.mjs";
import { each } from "./each.mjs";
export function each_object_values(o, lambda) {
  each(object_values(o), lambda);
}
