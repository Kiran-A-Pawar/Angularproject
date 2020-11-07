import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId =0;
  productDetails:Product;
  constructor(private  activetedRoute: ActivatedRoute, 
              private productsServices: ProductsService) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(data => {
       this.productId= data.id;
     
       this.productsServices.ViewProduct(this.productId).subscribe(productData => {
        this.productDetails= productData;
       });
    });
  }

      UpdateProduct(form){
        let updateProduct = {
          id:10,
          categoryId: form.value.product_category,
          productName: form.value.productName,
          description : form.value.product_description,
          rating: form.value.product_rating,
          productImg: '',
          isAvailable:'',
          color: form.value.product_color,
          reviews: form.value.product_reviews,
        };
      
        this.productsServices.updateProduct(this.productId,form.value)
        console.log(form);
      }

}
