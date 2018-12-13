import { inject } from "aurelia-framework";
import { CustomerData } from "./customerData";

@inject(CustomerData)
export class App {

    constructor(customerData) {
        this.customerData = customerData;
    }

    activate() {
        return this.customerData
            .getAll()
            .then(customers => this.customers = customers);
    }


}