import {object_merge} from "./object_merge.mjs";
export function object_replace(original, replacement) {
    object_properties_delete(original);
    object_merge(original, replacement);
}
