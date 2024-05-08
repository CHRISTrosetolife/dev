import { web_is } from "./web_is.mjs";

let g = {name:'global_get'};
export function global_get() {
    if (web_is()) {
        return global;
    }
    return g;
}
