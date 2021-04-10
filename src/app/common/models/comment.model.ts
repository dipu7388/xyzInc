import { Author } from './auther.model';

export class Comment {
  postId!: string;
  content: string | undefined;
  author!: Author;
  id!: string;
  threads: Comment[] = [];
  date!: Date;
  reply = false;
  likeCount: number = 0;
  dislikeCount: number = 0;
}
