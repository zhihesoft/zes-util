import { assert } from "chai";
import { parseParamNames } from "../index.mjs";
import { md5 } from "../lib/md5.mjs";
import { parseHost } from "../lib/parse.host.mjs";

describe(`zes-util test suit`, () => {

    describe(`parseHost`, () => {
        it(`should return host and port correctly`, async () => {
            const host = "127.0.0.1";
            const port = 8888;
            const ret = parseHost(`${host}:${port}`);
            assert.equal(ret.host, host);
            assert.equal(ret.port, port);
        });
    });

    describe(`md5`, () => {
        it(`md5`, async () => {
            const value = md5("111111");
            assert.equal(value, "96e79218965eb72c92a549dd5a330112");
        });
    });

    describe(`parseParamNames`, () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const testFunc = (a: string, b: string) => {
            //
        }
        it(`func(a: string, b: string)`, async () => {
            const names = parseParamNames(testFunc);
            assert.equal(names.length, 2);
            assert.equal(names[0], "a");
            assert.equal(names[1], "b");
        });
    });
});