export interface SearchResult {
    nbHits: number;
    nbPages: number;
    page: number;
    query: string;
    hits: Hits[];
}

export interface Hits {
    objectID: string;
    author: string;
    created_at: string;
    title: string;
    url: string;
    num_comments: string;
}
