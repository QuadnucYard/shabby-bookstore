import axios from "@/utils/request";
import { BookInfo } from "./book";

export interface FavoriteItem {
  book: BookInfo;
}

export async function getFavorites(): Promise<FavoriteItem[]> {
  return (await axios.get("/favorite")).data.data;
}

export async function addToFavorites(bid: int) {
  return (await axios.post("/favorite/add", { bid })).data;
}

export async function removeFromFavorites(bids: int[]) {
  return (await axios.post("/favorite/remove", { bids })).data;
}

export async function moveFavoriteToCart(bids: int[]) {
  return (await axios.post("/favorite/move", { bids })).data;
}
