import {object_property_get} from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function object_property_swap(object, property_a, property_b) {
    let value_a = object_property_get(object, property_a);
    let value_b = object_property_get(object, property_b);
    object_property_set(object, property_a, value_b);
    object_property_set(object, property_b, value_a);
}
