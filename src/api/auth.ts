import axios from "@/utils/request";

export async function register(user: any) {
  return (await axios.post("/auth/register", user)).data;
}

export async function login(user: { username: string; password: string }) {
  return (await axios.post("/auth/login", user)).data;
}

export async function logout() {
  return await axios.get("/auth/logout");
}

export async function auth() {
  return await axios.get("/auth");
}
