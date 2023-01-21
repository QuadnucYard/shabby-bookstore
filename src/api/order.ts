import axios from "@/utils/request";
import { BookInfo } from "./book";

export interface ShoppingCartItem {
  count: number;
  book: BookInfo;
}

export async function getShoppingCart(): Promise<ShoppingCartItem[]> {
  return (await axios.get("/shopping_cart")).data.data;
}

export async function addToCart(bid: number, count: number) {
  return (await axios.post("/shopping_cart/add", { bid, count })).data;
}

export async function removeFromCart(bid: number | number[]) {
  const bids = typeof bid === "number" ? [bid] : bid;
  return (await axios.post("/shopping_cart/remove", { bids })).data;
}

export async function moveToFavorites(bid: number | number[]) {
  const bids = typeof bid === "number" ? [bid] : bid;
  return (await axios.post("/shopping_cart/move", { bids })).data;
}

export async function createOrder(bids: number[]) {
  return (await axios.post("/order/create", { bids })).data;
}
