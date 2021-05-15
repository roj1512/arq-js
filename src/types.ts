export type LunaResult = string;

export type YouTubeResult = Array<{
    id: string;
    thumbnails: Array<string>;
    title: string;
    long_desc: string;
    channel: string;
    duration: string;
    views: string;
    publish_time: string;
    url_suffix: string;
}>;

export type TorrentResult = Array<{
    name: string;
    uploaded: string;
    size: string;
    seeds: number;
    leechs: number;
    magnet: string;
}>;

export type DeezerResult = Array<{
    id: number;
    title: string;
    source: string;
    duration: number;
    thumbnail: string;
    artist: string;
    url: string;
}>;

export type SaavnResult = Array<{
    song: string;
    album: string;
    year: string;
    singers: string;
    image: string;
    duration: string;
    media_url: string;
}>;

export type WallResult = Array<{
    id: string;
    width: string;
    file_type: string;
    file_size: string;
    url_image: string;
    url_thumb: string;
    url_page: string;
}>;

export interface RedditResult {
    postLink: string;
    subreddit: string;
    title: string;
    url: string;
    nsfw: boolean;
    spoiler: false;
    author: string;
    ups: number;
    preview: Array<string>;
}

export type UdResult = Array<{
    definition: string;
    permalink: string;
    thumbs_up: number;
    sound_urls: Array<number>;
    autho: string;
    word: string;
    defid: number;
    current_vote: string;
    written_on: string;
    example: string;
    thumbs_down: number;
}>;

export type PhResult = Array<{
    id: string;
    title: string;
    duration: string;
    views: number;
    raiting: string;
    url: string;
    category: Array<string>;
    thumbnails: Array<string>;
}>;

export interface PhDlResult {
    requested_url: string;
    video_url: string;
}

export type LyricsResult = string;

export interface WikiResult {
    title: string;
    answer: string;
}

export interface NsfwScanResult {
    drawings: number;
    hentai: number;
    neutral: number;
    porn: number;
    sexy: number;
    is_nsfw: boolean;
}

export type OcrResult = string;

export interface StatsResults {
    uptime: string;
    requests: number;
    cpu: string;
    memory: {
        server: string;
        api: string;
    };
    disk: number;
    platform: string;
    python: string;
}

export type RandomResult = number;

export interface ProxyResult {
    location: string;
    proxy: string;
}
