import { object_merge } from "./object_merge.mjs";
export function object_copy_shallow(settings) {
  return object_merge({}, settings);
}
