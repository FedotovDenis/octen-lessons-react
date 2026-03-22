import axios from "axios";
import type { IUserWithTokens } from "../models/IUserWithTokens";
import type { IProduct } from "../models/IProduct";
import type { IProductsResponseModelsType } from "../models/IProductsResponseModelsType";
import { retrieveLocalStorage } from "./helpers";
import type { ITokenPair } from "../models/ITokenPair";

type LoginData = {
  username: string;
  password: string;
  expiresInMins: number;
};

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/auth",
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === "GET") {
       requestObject.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>("user").accessToken;
    }
    return requestObject;
})


export const login = async ({username,password, expiresInMins,}: LoginData): Promise<IUserWithTokens> => {
  const { data: userWithTokens } = await axiosInstance.post<IUserWithTokens>("/login",{ username, password, expiresInMins },);
  console.log("userWithTokens", userWithTokens);
  localStorage.setItem("user", JSON.stringify(userWithTokens));
  return userWithTokens;
};

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const { data } = await axiosInstance.get<IProductsResponseModelsType>("https://dummyjson.com/products");
    console.log(data.products);
  return data.products;
};

export const refresh = async () => {
  const iUserWithTokens = retrieveLocalStorage<IUserWithTokens>("user");
  const { data: {accessToken, refreshToken} } = await axiosInstance.post<ITokenPair>("/refresh", {
    refreshToken: iUserWithTokens.refreshToken,
    expiresInMins: 5,
  });
  iUserWithTokens.accessToken = accessToken;
  iUserWithTokens.refreshToken = refreshToken;
  localStorage.setItem("user", JSON.stringify(iUserWithTokens));
  return iUserWithTokens;
};