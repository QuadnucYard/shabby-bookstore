import axios from "@/utils/request";

export interface BookInfo {
  bid: int;
  name: string;
  desc: string;
  author: string;
  publisher: string;
  publishDate: string;
  rating: int | null;
  numComments: int;
  price: float;
  originalPrice: float;
  cover: string;
  favorite?: boolean;
  keys: { [key: string]: string };
}

export interface Category {
  id: int;
  name: string;
  children: Category[];
}

export interface Comment {
  id: int;
  uid: int;
  bid: int;
  uname: string;
  rating: int;
  time: string;
  likes: int;
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
  page: int;
  pages: int;
  total: int;
  pageSize: int;
}

export async function getBookList(
  page: int,
  pageSize: int,
  options: QueryOptions,
  category: int
): Promise<PagedBookList> {
  const params = { page, pageSize, ...options, category };
  return (await axios.get("/book/list", { params })).data.data;
}

export async function getBook(bid: int): Promise<BookInfo> {
  return (await axios.get(`/book/b${bid}`)).data.data;
}

export async function getComments(bid: int): Promise<Comment[]> {
  return (await axios.get(`/book/comments/c${bid}`)).data.data;
}

export async function getCategories() {
  return (await axios.get("/category")).data.data;
}
