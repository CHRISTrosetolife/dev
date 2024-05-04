import { list_adder } from "./list_adder.mjs";
import { range } from "./range.mjs";

export function call_multiple(fn, times) {
    return list_adder(la => {
        for (let i of range(times)) {
            la(fn())
        }
    })
}
