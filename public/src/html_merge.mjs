import {object_merge} from "./object_merge.mjs";
export function html_merge(component, to_merge) {
    let {element} = component;
    object_merge(element, to_merge);
}
