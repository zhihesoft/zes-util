const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
const ARGUMENT_NAMES = /([^\s,]+)/g;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ANY_FUNC = (...args: any[]) => any;

/**
 * get function parameter names 
 * @param fn function
 * @returns parameter names
 */
export function parseParamNames(fn: ANY_FUNC): string[] {
    let fnStr = fn.toString();
    fnStr = fnStr.replace(STRIP_COMMENTS, '');
    const result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
    return result || [];
}

