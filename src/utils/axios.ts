import axios, { AxiosInstance } from "axios";
import { UserLogin, UserRegister } from "../types";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

class API {
  static async get({ url }: { url: string }) {
    const { data } = await instance.get(url);
    return data;
  }

  static async post({
    url,
    body,
  }: {
    url: string;
    body: UserLogin | UserRegister;
  }) {
    const { data } = await instance.post(url, body);
    return data;
  }
}

export { API };
