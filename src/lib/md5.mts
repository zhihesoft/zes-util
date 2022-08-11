import crypto from "crypto";

/**
 * calc md5 of string
 * @param value string value
 * @returns md5 value
 */
export function md5(value: string): string {
    const result = crypto.createHash('md5').update(value).digest('hex');
    return result.toLowerCase();
}
