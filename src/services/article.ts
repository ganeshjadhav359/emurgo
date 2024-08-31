import { fetchData } from "./api";
import { BASE_URL, API_KEY, TOP_CACHE_KEY, TITLE_CACHE_KEY, KEYWORD_CACHE_KEY, DEFAULT_ARTICLES } from "../constants/index"
import { ArticleResponse } from "../types/type";
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export const getTopNArticles = async (max: string) => {

    const cachedData = cache.get(TOP_CACHE_KEY + max);
    if (cachedData) {
        return cachedData;
    }

    const url = BASE_URL + "top-headlines" + "?lang=en" + "&max=" + max + "&apikey=" + API_KEY;
    const data: ArticleResponse = await fetchData<ArticleResponse>(url);
    cache.set(TOP_CACHE_KEY + max, data);
    return data;
};


export const searchByKeywordArticles = async (keyword: string) => {

    const cachedData = cache.get(KEYWORD_CACHE_KEY + keyword);
    if (cachedData) {
        return cachedData;
    }

    const url = BASE_URL + "search" + "?q=" + keyword + "&lang=en" + "&max=" + DEFAULT_ARTICLES + "&apikey=" + API_KEY;
    const data: ArticleResponse = await fetchData<ArticleResponse>(url);
    cache.set(KEYWORD_CACHE_KEY + keyword, data);
    return data;
};

export const searchByTitleArticles = async (title: string) => {

    const cachedData = cache.get(TITLE_CACHE_KEY + title);
    if (cachedData) {
        return cachedData;
    }

    const url = BASE_URL + "search" + "?q=" + title + "&lang=en" + "&max=" + DEFAULT_ARTICLES + "&in=title" + "&apikey=" + API_KEY;
    const data: ArticleResponse = await fetchData<ArticleResponse>(url);
    cache.set(TITLE_CACHE_KEY + title, data);
    return data;
};
