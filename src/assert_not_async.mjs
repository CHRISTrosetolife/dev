import { returns } from "./returns.mjs";
export function assert_not(fn, args) {
    returns(fn, false, args);
}
