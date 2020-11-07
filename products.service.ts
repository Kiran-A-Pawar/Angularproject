import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import{Product} from  './product';
import { from, Observable } from 'rxjs';
import {Category} from '../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private HttpClient: HttpClient) { }

      getAllProduct(): Observable<Product>{
        const producturl = 'http://localhost:3000/products';
        return this.HttpClient.get<Product>(producturl);
      }

     createProduct(productBody): Observable<Product>{
     const producturl = 'http://localhost:3000/products';
   // const producturl =' http://jsonplaceholder.com/';
    return this.HttpClient.post<Product>(producturl,productBody);
     }

     getCategories(): Observable<Category>{
      const categoriesurl = 'http://localhost:3000/Categories';
         return this.HttpClient.get<Category>(categoriesurl);
     }
     ViewProduct(productId): Observable<Product>{
      const producturl = 'http://localhost:3000/products/'+productId;
 
         return this.HttpClient.get<Product>(producturl);
      }

      updateProduct(productId,productBody): Observable<Product>{
        const producturl = 'http://localhost:3000/products/'+productId;
   
           return this.HttpClient.put<Product>(producturl,productBody);
        }

        deleteProduct(productId): Observable<Product>{
          const producturl = 'http://localhost:3000/products/'+productId;
             return this.HttpClient.delete<Product>(producturl);
          }  
        searchCategoryProduct(categoryId): Observable<Product>{
          const producturl = 'http://localhost:3000/products?categoryId'+categoryId;
             return this.HttpClient.get<Product>(producturl);
          }
          searchDateProduct(dateparam): Observable<Product>{
            const producturl = 'http://localhost:3000/products/date'+dateparam;
               return this.HttpClient.get<Product>(producturl);
            }
}
