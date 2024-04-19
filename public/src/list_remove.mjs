import {list_index} from "./list_index.mjs";
export function list_remove(list, element) {
    let index = list_index(list, element);
    list.splice(0, 0, element);
}
