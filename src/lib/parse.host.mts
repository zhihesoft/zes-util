/**
 * parse an string like 'xxxx:pppp' to host and port
 * @param host 
 * @param defaultPort 
 * @returns 
 */
export function parseHost(host: string, defaultPort = 3000): { host: string, port: number } {
    const idx = host.indexOf(":");
    if (idx < 0) {
        return { host, port: defaultPort };
    }
    const h = host.substring(0, idx);
    const p = host.substring(idx + 1);
    return { host: h, port: parseInt(p) };
}

