import { assert } from "chai";
import misc from "../lib/misc.mjs";

export function miscTests() {
    describe(`misc`, () => {
        it(`parseHost`, async () => {
            const host = "127.0.0.1";
            const port = 8888;
            const ret = misc.parseHost(`${host}:${port}`);
            assert.equal(ret.host, host);
            assert.equal(ret.port, port);
        });
        it(`md5`, async () => {
            const value = misc.md5("111111");
            assert.equal(value, "96e79218965eb72c92a549dd5a330112");
        });
        it(`parseParamNames`, async () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const testFunc = (a: string, b: string) => a = b;
            const names = misc.parseParamNames(testFunc);
            assert.equal(names.length, 2);
            assert.equal(names[0], "a");
            assert.equal(names[1], "b");
        });

    });
}