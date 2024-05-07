import {list_add} from "./list_add.mjs";
import {global_get} from "./global_get.mjs";
export function app_code_backable(lambda) {
    let global = global_get();
    let {back_stack} = global;
    list_add(back_stack, lambda);
    lambda();
}
