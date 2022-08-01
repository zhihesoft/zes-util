import crypto from "crypto";

export function md5(value: string): string {
    const result = crypto.createHash('md5').update(value).digest('hex');
    return result.toLowerCase();
}
