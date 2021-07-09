export type LunaResult = string;

export type YouTubeResult = {
    id: string;
    thumbnails: string[];
    title: string;
    long_desc: string;
    channel: string;
    duration: string;
    views: string;
    publish_time: string;
    url_suffix: string;
}[];

export type TorrentResult = {
    name: string;
    uploaded: string;
    size: string;
    seeds: number;
    leechs: number;
    magnet: string;
}[];

export type DeezerResult = {
    id: number;
    title: string;
    source: string;
    duration: number;
    thumbnail: string;
    artist: string;
    artistPictures: string[];
    url: string;
}[];

export type SaavnResult = {
    song: string;
    album: string;
    year: string;
    singers: string;
    image: string;
    duration: string;
    media_url: string;
}[];

export type WallResult = {
    id: string;
    width: string;
    file_type: string;
    file_size: string;
    url_image: string;
    url_thumb: string;
    url_page: string;
}[];

export interface RedditResult {
    postLink: string;
    subreddit: string;
    title: string;
    url: string;
    nsfw: boolean;
    spoiler: false;
    author: string;
    ups: number;
    preview: string[];
}

export type UdResult = {
    definition: string;
    permalink: string;
    thumbs_up: number;
    sound_urls: number[];
    autho: string;
    word: string;
    defid: number;
    current_vote: string;
    written_on: string;
    example: string;
    thumbs_down: number;
}[];

export type PhResult = {
    id: string;
    title: string;
    duration: string;
    views: number;
    rating: string;
    ratings: number;
    uploaded: string;
    url: string;
    type: string;
    mainThumb: string;
    categories: string[];
    tags: string[];
    pornstars: string[];
    thumbnails: {
        size: string;
        width: string;
        height: string;
        src: string;
    }[];
}[];

export interface PhDlResult {
    title: string;
    thumbnail: string;
    video: {
        quality: string;
        url: string;
        size: string;
    }[];
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

export type ProxyResult = {
    location: string;
    proxy: string;
}[];

export type TmdbResult = {
    id: number;
    title: string;
    overview: string;
    rating: number | null;
    releaseDate: string;
    genre: string[];
    type: string;
    backdrop: string;
    poster: string;
}[];

export interface TranslateResult {
    translatedText: string;
    src: string;
    dest: string;
}

export interface YouTubeDownloadResult {
    id: string;
    title: string;
    duration: number;
    thumbnail: string;
    video: {
        size: string;
        format: string;
        quality: string;
        url: string;
    }[];
}

export interface PyPiResult {
    name: string;
    version: string;
    license: string;
    description: string | null;
    size: string;
    uploadTime: string;
    author: string;
    authorEmail: string;
    keywords: string;
    requirements: string[];
    minPyVersion: string;
    homepage: string | null;
    bugTrackURL: string | null;
    docsURL: string | null;
    pypiURL: string;
    releaseURL: string;
    projectURLS: { [key: string]: string };
}

export interface SpellCheckResult {
    corrected: string;
    corrections: { [key: string]: string };
}
