import crypto from "crypto";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ANY_FUNC = (...args: any[]) => any;
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
const ARGUMENT_NAMES = /([^\s,]+)/g;


export interface HostInfo {
    host: string;
    port: number;
}

const misc = {
    /**
     * calc md5 of string
     * @param value string value
     * @returns md5 value
     */
    md5: function (value: string): string {
        const result = crypto.createHash('md5').update(value).digest('hex');
        return result.toLowerCase();
    },

    /**
     * parse an string like 'xxxx:pppp' to host and port
     * @param host 
     * @param defaultPort 
     * @returns 
     */
    parseHost: function (host: string, defaultPort = 3000): HostInfo {
        const idx = host.indexOf(":");
        if (idx < 0) {
            return { host, port: defaultPort };
        }
        const h = host.substring(0, idx);
        const p = host.substring(idx + 1);
        return { host: h, port: parseInt(p) };
    },


    /**
     * get function parameter names 
     * @param fn function
     * @returns parameter names
     */
    parseParamNames: function (fn: ANY_FUNC): string[] {
        let fnStr = fn.toString();
        fnStr = fnStr.replace(STRIP_COMMENTS, '');
        const result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
        return result || [];
    },
}

export default misc;