import { assert } from "chai";
import math from "../lib/math.mjs";

export function mathTests() {
    return describe(`math`, () => {
        it(`random`, async () => {
            const num = math.random(0, 2);
            assert.isBelow(num, 2);
            assert.isTrue(num >= 0);
        });
        it(`randomInt`, async () => {
            const num = math.randomInt(1, 2);
            assert.isTrue(Math.floor(num) - num == 0);
        });
    });
}