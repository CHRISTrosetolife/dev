import { returns } from "./returns.mjs";
export function assert(fn, args) {
    returns(fn, true, args);
}
