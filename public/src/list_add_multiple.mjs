import {list_add} from "./list_add.mjs";
export function list_add_multiple(list, screens) {
    for (let s of list) {
        list_add(screens, s);
    }
}
