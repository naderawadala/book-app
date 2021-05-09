export class Book {
  id: number;
  created: Date;
  lastUpdated: Date;

  title: string;
  subtitle: string;
  category: string;
  language: string;
  pages: number;
  coverImgURL: string;
  publishAt: Date;

  constructor() {
    this.language = 'English';
    this.pages = 0;
  }

}
