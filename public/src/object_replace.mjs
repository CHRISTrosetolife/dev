import {object_properties_delete} from "./object_properties_delete.mjs";
import {object_merge} from "./object_merge.mjs";
export function object_replace(original, replacement) {
    object_properties_delete(original);
    object_merge(original, replacement);
}
