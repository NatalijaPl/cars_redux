import axios from "axios";

class HttpService {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/",
    });
  }
}

export const httpService = new HttpService();
