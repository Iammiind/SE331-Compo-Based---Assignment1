import { Injectable } from '@angular/core';
import { Product } from './../product/product';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs/Rx"; 

@Injectable()
export class ProductDataServerService {
    constructor(private http: Http){}
    // serverPath: String = 'http://localhost:8080/';
    serverPath: String = 'http://54.202.180.243:8080/assignment3/';

    getProductsData() {
        let productArray: Product[];
        return this.http.get(this.serverPath + 'product')
            .map((res: Response) => {
                let productArray = res.json();
                productArray.forEach((product: Product) => {
                    product.picture = this.serverPath + 'product/image/' + product.picture;
                });
                return productArray;
            } );
    }

    getProduct(id: number) {
        let product: Product;
        return this.http.get(this.serverPath + 'product/' + id)
            .map((res: Response) => {
                if(res) {
                    if(res.status === 200) {
                        let product : Product = res.json();
                        product.picture = this.serverPath + 'product/image/' + product.picture;
                        return product;
                    }
                    if(res.status === 204) {
                        return null;
                    }
                }
                return null;
            })
            .catch((error: any) => {
                if(error.status === 500) {
                    return Observable.throw(new Error(error.status));
                }
                else if(error.status === 400) {
                    return Observable.throw(new Error(error.status));
                }
                else if(error.status === 409) {
                    return Observable.throw(new Error(error.status));
                }
                else if(error.status === 406) {
                    return Observable.throw(new Error(error.status));
                }
                return error
            });
    }

    addProduct(product: Product, file: any) {
        let formData = new FormData();
        let filename: String;

        formData.append('file', file);
        return this.http.post(this.serverPath + 'product/image', formData)
            .flatMap(filename => {
                product.picture =filename.text();
                let headers = new Headers({'Content-Type': 'application/json'});
                let options = new RequestOptions({headers: headers, method: 'post'});
                let body = JSON.stringify(product);
                return this.http.post(this.serverPath + 'product', body, options)
                    .map(res => {
                        return res.json();
                    })
                    .catch((error: any) => {
                        return Observable.throw(new Error(error.status));
                    })

            })

    }
}