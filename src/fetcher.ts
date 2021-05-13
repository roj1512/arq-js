import _fetch from 'node-fetch';

export const fetch = async (url: string): Promise<any> => {
    const response = await _fetch(url);

    try {
        return await response.json();
    } catch (error) {
        return await response.text();
    }
};
