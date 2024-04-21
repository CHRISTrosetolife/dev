import {object_merge} from "./object_merge.mjs";
export function object_copy(node) {
    return object_merge({}, node);
}
