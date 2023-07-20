export class Book {
    title: string;
    authors: string[];
    description: string;
    cover: string;
    chapterList: string[];

    constructor(title = "title", authors:string[] = [ "authors" ], cover = "cover", chapterList:string[] = [ "chapter1" ]) {
        this.title = title;
        this.authors = authors;
        this.cover = cover;
        this.chapterList = chapterList;
    }
}
