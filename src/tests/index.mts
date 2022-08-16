import { ioTests } from "./io.mjs";
import { mathTests } from "./math.mjs";
import { miscTests } from "./misc.mjs";

// test suit
describe(`zes-util tests`, () => {
    miscTests();
    ioTests();
    mathTests();
});