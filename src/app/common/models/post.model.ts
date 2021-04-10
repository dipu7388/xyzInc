import { Author } from './auther.model';

export interface Post {
  id: string;
  author: Author;
  image: string;
  title: string;
  desc: string;
  content: string;
  date: Date;
}
