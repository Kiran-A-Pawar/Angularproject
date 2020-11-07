import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import {Category } from 'src/app/site-framework/category'
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {

  searchCategory : Category;
  productList: Product;
  constructor(private activetedRoute : ActivatedRoute,
    private productsServices: ProductsService) {  }

  ngOnInit(): void {

     
    this.activetedRoute.params.subscribe( data =>{
       console.log(data);
           this.searchCategory = data.id;
        console.log(this.searchCategory);
             this.productsServices.searchCategoryProduct(this.searchCategory).subscribe(categoryData => {
              console.log(categoryData);
                   this.productList=categoryData;
             });
    });
    
  }

}
