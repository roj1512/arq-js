import { encode } from 'querystring';
import { fetch } from './fetcher';

class _ARQ {
    arqApi: string;

    constructor(arqApi: string) {
        this.arqApi = arqApi;
    }

    /**
     * Get direct Deezer song link.
     * @param query
     * @param limit
     */
    async deezer(query: string, limit: number) {
        return await fetch(`${this.arqApi}/deezer?${encode({ query, limit })}`);
    }

    /**
     *
     * @param query
     */
    async torrent(query: string) {
        return await fetch(`${this.arqApi}/torrent?${encode({ query })}`);
    }

    /**
     *
     * @param query
     */
    async saavn(query: string) {
        return await fetch(`${this.arqApi}/saavn?${encode({ query })}`);
    }

    /**
     * Search for YouTube videos.
     * @param query
     */
    async youtube(query: string) {
        return await fetch(`${this.arqApi}/youtube?${encode({ query })}`);
    }

    /**
     *
     * @param query
     */
    async wall(query: string) {
        return await fetch(`${this.arqApi}/wall?${encode({ query })}`);
    }

    /**
     *
     * @param query
     */
    async reddit(query: string) {
        return await fetch(`${this.arqApi}/reddit?${encode({ query })}`);
    }

    /**
     * Search the Urban dictionary.
     * @param query
     */
    async ud(query: string) {
        return await fetch(`${this.arqApi}/ud?${encode({ query })}`);
    }

    /**
     *
     * @param query
     */
    async ph(query: string) {
        return await fetch(`${this.arqApi}/ph?${encode({ query })}`);
    }

    /**
     *
     * @param query
     */
    async phdl(query: string) {
        return await fetch(`${this.arqApi}/phdl?${encode({ query })}`);
    }

    /**
     *
     * @param query
     */
    async luna(query: string) {
        return await fetch(`${this.arqApi}/luna?${encode({ query })}`);
    }

    /**
     *
     * @param query
     */
    async lyrics(query: string) {
        return await fetch(`${this.arqApi}/lyrics?${encode({ query })}`);
    }

    /**
     *
     * @param query
     */
    async wiki(query: string) {
        return await fetch(`${this.arqApi}/wiki?${encode({ query })}`);
    }

    /**
     *
     * @param url
     */
    async nsfwScan(url: string) {
        return await fetch(`${this.arqApi}/wiki?${encode({ url })}`);
    }

    /**
     *
     * @param url
     */
    async ocr(url: string) {
        return await fetch(`${this.arqApi}/wiki?${encode({ url })}`);
    }

    /**
     *
     */
    async stats() {
        return await fetch(`${this.arqApi}/stats`);
    }
}

export const ARQ = _ARQ;
