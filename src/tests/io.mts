import { assert } from "chai";
import io from "../lib/io.mjs";

const testTempDir = "./testtemp";

export function ioTests() {
    describe(`io`, () => {
        before(() => {
            io.rmdir(testTempDir);
        });
        after(() => {
            io.rmdir(testTempDir);
        });
        it(`exist`, async () => {
            assert.isTrue(io.exist("./src"), `src dir should existed`);
            assert.isFalse(io.exist(testTempDir), "temp dir should not existed");
        });
        it(`isFile`, async () => {
            assert.isTrue(io.isFile("./tsconfig.json"), "./tsconfig.json is a file");
            assert.isFalse(io.isFile("./src"), "./src is a dir");
        });
        it(`files`, async () => {
            assert.equal(io.files("./.github/workflows").length, 2, "there are 2 files in ./.github/workflows");
            assert.notEqual(io.files("./src").length, 2, "there are not 2 files in ./src");
        });
        it(`mkdir`, async () => {
            io.mkdir(testTempDir);
            assert.isTrue(io.exist(testTempDir), "temp dir should created");
        });
        it(`rmdir`, async () => {
            io.rmdir(testTempDir);
            assert.isFalse(io.exist(testTempDir), "temp dir should removed");
        });
    });
}