import {list_adder_unique} from "./list_adder_unique.mjs";
export function list_unique(list) {
    return list_adder_unique(la => {
        for (let e of list) {
            la(e);
        }
    });
}
