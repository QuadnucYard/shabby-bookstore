import axios from "@/utils/request";

export async function register(user: any) {
  return await axios.post("/auth/register", user);
}

export async function login(user: { username: string; password: string }) {
  return await axios.post("/auth/login", user);
}
