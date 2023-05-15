import {Category} from "./Category";
import {Order} from "./Order";

export class Product {
    protected id!: any;
    protected name!: string;
    protected category!: Category;
    protected price!: number;
    protected order!: Order;

    constructor(id: any, name: string, category: Category, price: number, order: Order) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.order = order;
    }
}