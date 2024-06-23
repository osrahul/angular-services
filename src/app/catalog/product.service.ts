import { Injectable } from "@angular/core";
import { Product } from "@shared/product.model";
import { productsArray } from "./products-data";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    getProducts(): Product[] {
        return productsArray;
    }
}