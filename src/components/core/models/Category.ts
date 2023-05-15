import {StorageProduct} from "./StorageProduct";

export class Category {
    public categoryId: string;
    protected name!: string;
    protected storageProducts!: Array<StorageProduct>;

    constructor(categoryId: string, name: string,
                storageProducts: Array<StorageProduct>) {
        this.categoryId = categoryId;
        this.name = name;
        this.storageProducts = storageProducts;
    }
}