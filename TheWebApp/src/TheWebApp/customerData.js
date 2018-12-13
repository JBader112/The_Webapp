import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-http-client";

let baseUrl = "customers.json"

@inject(HttpClient)
export class CustomerData {

    constructor(httpClient) {
        this.http = httpClient;
    }

    getAll() {
        return this.http.get(baseUrl)
            .then(response => {
                return response.content;
            });
    }
}