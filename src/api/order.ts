import axios from "@/utils/request";
import { BookInfo } from "./book";

export interface ShoppingCartItem {
  count: int;
  book: BookInfo;
}

export interface Order {
  id: int;
  uid: int;
  address: string;
  create_time: string;
  payment: string;
  state: int;
  items: ShoppingCartItem[];
}

export async function getShoppingCart(): Promise<ShoppingCartItem[]> {
  return (await axios.get("/shopping_cart")).data.data;
}

export async function addToCart(bid: int, count: int) {
  return (await axios.post("/shopping_cart/add", { bid, count })).data;
}

export async function removeFromCart(bid: int | int[]) {
  const bids = typeof bid === "number" ? [bid] : bid;
  return (await axios.post("/shopping_cart/remove", { bids })).data;
}

export async function moveToFavorites(bid: int | int[]) {
  const bids = typeof bid === "number" ? [bid] : bid;
  return (await axios.post("/shopping_cart/move", { bids })).data;
}

export async function createOrder(bids: int[]) {
  return (await axios.post("/order/create", { bids })).data;
}

export async function getOrder(): Promise<Order> {
  return (await axios.get("/order")).data.data;
}

export async function submitOrder() {
  return (await axios.post("/order/submit")).data;
}
