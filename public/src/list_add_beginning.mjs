import {list_insert} from "./list_insert.mjs";
export function list_add_beginning(list, element) {
    list.splice(0, 0, element);
    return;
    list_insert(list, 0, element);
}
