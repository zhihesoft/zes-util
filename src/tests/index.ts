import { assert } from "chai";
import { Http } from "../lib/http";
import { isNullOrEmpty } from "../lib/is.null.or.empty";
import { md5 } from "../lib/md5";
import { parseHost } from "../lib/parse.host";

describe(`zes-util test suit`, () => {

    describe(`isNullOrEmpty`, () => {
        it(`should return true if null or empty`, async () => {
            assert.isTrue(isNullOrEmpty(""));
            assert.isTrue(isNullOrEmpty(undefined));
        });
        it(`should return false if not null`, async () => {
            assert.isFalse(isNullOrEmpty("hello world"));
        });
    });

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

    describe(`http`, () => {
        it("post", async () => {
            const http = new Http("http://echo.jsontest.com");
            const ret = await http.post<{ key: string, one: string }>("key/value/one/two", undefined);
            assert.equal(ret.key, "value");
            assert.equal(ret.one, "two");
        });
        it("get", async () => {
            const http = new Http("http://echo.jsontest.com");
            const ret = await http.get<{ key: string, one: string }>("key/value/one/two", undefined);
            assert.equal(ret.key, "value");
            assert.equal(ret.one, "two");
        });
    });
});