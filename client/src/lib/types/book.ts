export class Book {
    title: string;
    authors: string[];
    description: string;
    cover: string;
    chapterList: string[];

    constructor(title = "title", authors:string[] = [ "authors" ], description = "description", cover = "cover", chapterList:string[] = [ "chapter1" ]) {
        this.title = title;
        this.authors = authors;
        this.description = description;
        this.cover = cover;
        this.chapterList = chapterList;
    }
}
