import {list_add} from './list_add.mjs';
export function range(count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        list_add(result, i);
    }
    return result;
}