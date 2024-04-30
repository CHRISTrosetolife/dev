import {object_property_get} from "./object_property_get.mjs";
export function object_property_swap(object, property_a, property_b) {
    let value_a = object_property_get(object, property_a);
    let value_b = object_property_get(object, property_b);
}
