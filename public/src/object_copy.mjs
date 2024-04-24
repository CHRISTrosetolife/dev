import {object_merge} from "./object_merge.mjs";
export function object_copy(object) {
    let copy = {};
    object_merge(copy, object);
    return copy;
}
