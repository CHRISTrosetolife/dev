import {equal} from "./equal.mjs";
export function equal_by(a, b, mapper) {
    return equal(mapper(a), mapper(b));
}
