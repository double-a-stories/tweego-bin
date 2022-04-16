/**
 * @file Download a file asynchronously, and return a data stream
 */

import axios from "axios";

export default async function downloadStreamAsync(url) {
    try {
        const res = await axios.get(url, { responseType: 'stream' });
        const { 'content-length': length } = res.headers;
        console.info(`Got response! File is ${(+length / Math.pow(2, 20)).toFixed(2)} MiB`)
        return await res.data;
    } catch (err) {
        throw new Error(`Error downloading from ${err.config.url}: ${err.message}`);
    }
}