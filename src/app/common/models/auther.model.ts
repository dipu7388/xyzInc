import { Post } from './post.model';

export interface Author {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  posts: Post[];
  accountHistory: string[];
  avatar: string;
  dob: Date;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  state: string;
  zipcode: string;
  geo: Geo;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Geo {
  lat: string;
  lng: string;
}
