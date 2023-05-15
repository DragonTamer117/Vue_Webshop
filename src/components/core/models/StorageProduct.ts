import { Category } from "./Category";

export class StorageProduct {
    public id!: any;
    public name!: string;
    public category!: Category;
    public price!: number;
    public inStock!: boolean;
    public isSoldOut!: boolean;
    public imageUrl!: string;

    constructor(id: any, name: string, category: Category,
                price: number, inStock: boolean,
                isSoldOut: boolean, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.inStock = inStock;
        this.isSoldOut = isSoldOut;
        this.imageUrl = imageUrl;
    }
}