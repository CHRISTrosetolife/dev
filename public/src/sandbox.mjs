import {object_property_get} from "./object_property_get.mjs";
export function sandbox() {
    let v1 = b;
    let c = object_property_get(v1, 'a');
    ;
}
