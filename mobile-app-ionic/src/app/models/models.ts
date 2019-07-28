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
    publisher: string;
    publishedDate: string;
    title: string;
    industryIdentifiers: [];
    averageRating: any;

}
