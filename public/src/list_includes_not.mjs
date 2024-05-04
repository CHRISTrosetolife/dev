import {list_includes} from "./list_includes.mjs";
export function list_includes_not(existing, value2) {
    return !list_includes(existing, value2);
}
