import { keyboard_keys_rows } from "./keyboard_keys_rows.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";

export function keyboard_keys() {
    let ks = keyboard_keys_rows();
    let concat = list_concat_multiple(ks);
    return concat
}
