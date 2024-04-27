import {list_add} from "./list_add.mjs";
export function list_add_multiple(lesson_screens, screens) {
    for (let s of lesson_screens) {
        list_add(screens, s);
    }
}
