import { encode } from 'querystring';
import fetch from 'node-fetch';

class _ARQ {
    url: string;
    key: string;

    constructor(url: string, key: string) {
        this.url = url.endsWith('/') ? url : url + '/';
        this.key = key;
    }

    private async fetch(route: string, query: { [key: string]: any } = {}) {
        const result = await (
            await fetch(this.url + route + '?' + encode(query), {
                headers: { 'x-api-key': this.key },
            })
        ).json();
        if (result.ok) return result;
        else throw new Error(result.result);
    }

    /**
     * Search Deezer and get direct links to download songs.
     * @param query
     * @param limit
     */
    async deezer(query: string, count: number) {
        return await this.fetch('deezer', { query, count });
    }

    /**
     * Search for Torrents across various websites.
     * @param query
     */
    async torrent(query: string) {
        return await this.fetch('torrent', { query });
    }

    /**
     * Get songs from Saavn.
     * @param query
     */
    async saavn(query: string) {
        return await this.fetch('saavn', { query });
    }

    /**
     * Get information about a Saavn playlist.
     * @param query
     */
    async saavnPlaylist(query: string) {
        return await this.fetch('saavnPlaylist', { query });
    }

    /**
     * Search for YouTube videos.
     * @param query
     */
    async youtube(query: string) {
        return await this.fetch('youtube', { query });
    }

    /**
     * Search for wallpapares.
     * @param query
     */
    async wall(query: string) {
        return await this.fetch('wall', { query });
    }

    /**
     * Search for Reddit posts.
     * @param query
     */
    async reddit(query: string) {
        return await this.fetch('reddit', { query });
    }

    /**
     * Search the Urban dictionary.
     * @param query
     */
    async ud(query: string) {
        return await this.fetch('ud', { query });
    }

    /**
     * Search for a PH video.
     * @param query
     */
    async ph(query: string) {
        return await this.fetch('ph', { query });
    }

    /**
     * Download a PH video.
     * @param query
     */
    async phDownload(url: string) {
        return await this.fetch('phdl', { url });
    }

    /**
     * Communicate with an AI chatbot.
     * @param query
     */
    async luna(query: string) {
        return await this.fetch('luna', { query });
    }

    /**
     * Get song lyrics.
     * @param query
     */
    async lyrics(query: string) {
        return await this.fetch('lyrics', { query });
    }

    /**
     * Search Wikipeida.
     * @param query
     */
    async wiki(query: string) {
        return await this.fetch('wiki', { query });
    }

    /**
     * Scan and classify an image.
     * @param url
     */
    async nsfwScan(url: string) {
        return await this.fetch('nsfw_scan', { url });
    }

    /**
     * Recognize characters in an image.
     * @param url
     */
    async ocr(url: string) {
        return await this.fetch('ocr', { url });
    }

    /**
     * Get stats of the ARQ API.
     */
    async stats() {
        return await this.fetch('stats');
    }

    /**
     * Generate a true random number using atmospheric noises.
     * @param min
     * @param max
     */
    async random(min: number, max: number) {
        return await this.fetch('stats', { min, max });
    }

    /**
     * Get a sock5 proxy.
     */
    async proxy() {
        return await this.fetch('proxy');
    }
}

export const ARQ = _ARQ;
