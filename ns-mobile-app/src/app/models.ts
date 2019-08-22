export interface Book {
    id: string;
    volumeInfo: Info;
}

export interface BookCollection {
    items?: Book[];
    totalItems?: number;
}


export interface Info {
    authors: [];
    canonicalVolumeLink: string;
    categories: [];
    description: string;
    imageLinks: {};
    language: string;
    pageCount: number;
    publisher: string;
    publishedDate: string;
    title: string;
    industryIdentifiers: ISBN[];
    averageRating: any;

}

export interface ISBN {
    identifier: string;
    type: string;
}
