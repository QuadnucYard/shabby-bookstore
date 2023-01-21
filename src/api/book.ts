import axios from "@/utils/request";

export interface BookInfo {
  bid: number;
  name: string;
  desc: string;
  author: string;
  publisher: string;
  publishDate: string;
  rating: number;
  numComments: number;
  price: number;
  originalPrice: number;
  cover: string;
  favorite?: boolean;
}

export interface Comment {
  id: number;
  uid: number;
  bid: number;
  uname: string;
  rating: number;
  time: string;
  likes: number;
  content: string;
}

export interface QueryOptions {
  keyword?: string;
  name?: string;
  author?: string;
  publisher?: string;
  desc?: string;
}

export interface PagedBookList {
  items: BookInfo[];
  page: number;
  pages: number;
  total: number;
  pageSize: number;
}

export async function getBookList(
  page: number,
  pageSize: number,
  options: QueryOptions
): Promise<PagedBookList> {
  return (await axios.get("/book/list", { params: { page, pageSize, ...options } })).data.data;
}

export async function getBook(bid: number): Promise<BookInfo> {
  return (await axios.get(`/book/b${bid}`)).data.data;
}

export async function getComments(bid: number): Promise<Comment[]> {
  return (await axios.get(`/book/comments/c${bid}`)).data.data;
}
