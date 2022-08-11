/**
 * tell whether a string value is empty or null or undefined
 * @param str input string
 * @returns 
 */
export function isNullOrEmpty(str: string | undefined) {
    if (!str || str.length <= 0) {
        return true;
    }
    return false;
}

