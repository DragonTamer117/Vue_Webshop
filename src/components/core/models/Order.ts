import {OrderStatus} from "../enums/OrderStatus";
import {Product} from "./Product";

export class Order {
    protected id: any;
    protected userId: any;
    protected orderStatus: OrderStatus;
    protected products: Array<Product>;

    constructor(id: any, userId: any, orderStatus: OrderStatus, products: Array<Product>) {
        this.id = id;
        this.userId = userId;
        this.orderStatus = orderStatus;
        this.products = products;
    }
}