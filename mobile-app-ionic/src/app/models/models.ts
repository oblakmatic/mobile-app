export class Book {
    id: string;
    volumeInfo: Info;
}

export class BookCollection {
    items?: Book[];
    totalItems?: number;
}



export class Info {
    authors: [];
    canonicalVolumeLink: string;
    categories: [];
    description: string;
    imageLinks: {};
    language: string;
    pageCount: number;
    publishedDate: string;
    title: string;
}
