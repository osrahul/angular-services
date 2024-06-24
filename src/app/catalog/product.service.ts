import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProductsService } from "@shared/product-service.interface";
import { Product } from "@shared/product.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService implements IProductsService {
    constructor(private httpClient: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('/api/products');
    }
}