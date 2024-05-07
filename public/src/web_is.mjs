import {web_not_is} from "./web_not_is.mjs";
export function web_is() {
    return !web_not_is();
}
