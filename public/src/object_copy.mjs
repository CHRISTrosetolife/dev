import {object_merge} from "./object_merge.mjs";
export function object_copy(object) {
    return object_merge({}, object);
}
