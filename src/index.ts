import { encode } from 'querystring';
import fetch from 'node-fetch';
import * as t from './types';

class _ARQ {
    url: string;
    key: string;

    constructor(url: string, key: string) {
        this.url = url.endsWith('/') ? url : url + '/';
        this.key = key;
    }

    async fetch(
        route: string,
        query: { [key: string]: any } = {},
        post: boolean = false,
    ) {
        let response;

        if (post) {
            response = await fetch(this.url + route, {
                method: 'POST',
                headers: { 'x-api-key': this.key },
                body: JSON.stringify(query),
            });
        } else {
            response = await fetch(this.url + route + '?' + encode(query), {
                method: 'GET',
                headers: { 'x-api-key': this.key },
            });
        }

        if (response.status == 403 || response.status == 401) {
            throw new Error('Invalid API key');
        }

        const { ok, result } = await response.json();

        if (typeof ok === 'undefined' || typeof result == 'undefined') {
            throw new Error('Invalid response');
        }

        if (ok) {
            return result;
        } else {
            throw new Error(result);
        }
    }

    /**
     * Search Deezer and get direct links to download songs.
     */
    async deezer(query: string, count: number): Promise<t.DeezerResult> {
        return await this.fetch('deezer', { query, count });
    }

    /**
     * Search for Torrents across various websites.
     */
    async torrent(query: string): Promise<t.TorrentResult> {
        return await this.fetch('torrent', { query });
    }

    /**
     * Get songs from Saavn.
     */
    async saavn(query: string): Promise<t.SaavnResult> {
        return await this.fetch('saavn', { query });
    }

    /**
     * Get information about a Saavn playlist.
     */
    async saavnPlaylist(query: string): Promise<any> {
        return await this.fetch('saavnPlaylist', { query });
    }

    /**
     * Search for YouTube videos.
     */
    async youtube(query: string): Promise<t.YouTubeResult> {
        return await this.fetch('youtube', { query });
    }

    /**
     * Search for wallpapares.
     */
    async wall(query: string): Promise<t.WallResult> {
        return await this.fetch('wall', { query });
    }

    /**
     * Search for Reddit posts.
     */
    async reddit(query: string): Promise<t.RedditResult> {
        return await this.fetch('reddit', { query });
    }

    /**
     * Search the Urban dictionary.
     */
    async ud(query: string): Promise<t.UdResult> {
        return await this.fetch('ud', { query });
    }

    /**
     * Search for a PH video.
     */
    async ph(
        query: string,
        page: number = 1,
        thumbSize: string = 'small',
    ): Promise<t.PhDlResult> {
        return await this.fetch('ph', { query, page, thumbSize });
    }

    /**
     * Download a PH video.
     */
    async phDownload(url: string): Promise<t.PhDlResult> {
        return await this.fetch('phdl', { url });
    }

    /**
     * Communicate with an AI chatbot.
     */
    async luna(query: string, id: number): Promise<t.LunaResult> {
        return await this.fetch('luna', { query, id });
    }

    /**
     * Get song lyrics.
     */
    async lyrics(query: string): Promise<t.LyricsResult> {
        return await this.fetch('lyrics', { query });
    }

    /**
     * Search Wikipeida.
     */
    async wiki(query: string): Promise<t.WikiResult> {
        return await this.fetch('wiki', { query });
    }

    /**
     * Scan and classify an image.
     */
    async nsfwScan(url: string): Promise<t.NsfwScanResult> {
        return await this.fetch('nsfw_scan', { url });
    }

    /**
     * Recognize characters in an image.
     */
    async ocr(url: string): Promise<t.OcrResult> {
        return await this.fetch('ocr', { url });
    }

    /**
     * Get stats of the ARQ API.
     */
    async stats(): Promise<t.StatsResults> {
        return await this.fetch('stats');
    }

    /**
     * Generate a true random number using atmospheric noises.
     */
    async random(min: number, max: number): Promise<t.RandomResult> {
        return await this.fetch('stats', { min, max });
    }

    /**
     * Get a sock5 proxy.
     */
    async proxy(): Promise<t.ProxyResult> {
        return await this.fetch('proxy');
    }

    /**
     * Search movie database.
     */
    async tmdb(query: string): Promise<t.TmdbResult> {
        return await this.fetch('tmdb', { query });
    }

    /**
     * Generate Telegram quote stickers.
     */
    async quotly(payload: { [key: string]: any }): Promise<t.QuotlyResult> {
        return await this.fetch(
            'quotly',
            { payload: JSON.stringify(payload) },
            true,
        );
    }

    /**
     * Download a YouTube video.
     */
    async youtubeDownload(url: string): Promise<t.YouTubeDownloadResult> {
        return await this.fetch('ytdl', { url });
    }

    async translate(
        text: string,
        destLangCode: string = 'en',
    ): Promise<t.TranslateResult> {
        return await this.fetch('translate', { text, destLangCode });
    }
}

export const ARQ = _ARQ;
