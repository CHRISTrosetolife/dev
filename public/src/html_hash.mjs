import {object_property_get} from "./object_property_get.mjs";
import {list_includes} from "./list_includes.mjs";
import {list_get} from "./list_get.mjs";
import {equal} from "./equal.mjs";
import {assert} from "./assert.mjs";
import {list_length} from "./list_length.mjs";
import {string_split} from "./string_split.mjs";
import {string_prefix_without} from "./string_prefix_without.mjs";
import {string_length} from "./string_length.mjs";
import {greater_than} from "./greater_than.mjs";
import {object_properties} from "./object_properties.mjs";
export function html_hash(actions) {
    let action_properties = object_properties(actions);
    let hash = window.location.hash;
    if (greater_than(string_length(hash), 0)) {
        let hash_no_tag = string_prefix_without(hash, '#');
        let split = string_split(hash_no_tag, ',');
        for (let s of split) {
            let split2 = string_split(s, '=');
            let s2_length = list_length(split2);
            assert(equal, [s2_length, 2]);
            let key = list_get(split2, 0);
            let value = list_get(split2, 1);
            if (list_includes(action_properties, key)) {
                let action = object_property_get(actions, key);
                action(value);
            }
        }
    }
}
