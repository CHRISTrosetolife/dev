import {error} from "./error.mjs";
export function assert(condition) {
    if (condition === false) {
        error('assert');
    }
}
