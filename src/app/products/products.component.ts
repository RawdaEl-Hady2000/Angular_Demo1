import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  ProductList:IProduct;     // this is the first interface
  CategoryList:ICategory;  // this is the secound interface
  Store_Name:string ;     // this is a property 
  Store_Logo:string ;    // this is a property 
  Client_Name:string;   // this is a property 
  IsPurshased:boolean; // this is a property 
  Discount:DiscountOffers_Enum.Discount;  // this is a property  as Enum

  // variable to store Img_path
  imgURL:string="Batoot.jpg";

  constructor() 
  {
   this.ProductList={ID:3,Name:"Cream",Quantity:300,Price:3000,Img:""} //data of the  first interface
   this.CategoryList={ID:4,Name:"SkinCare"} //data of the  secound interface
   this.Store_Logo="B";
   this.Store_Name="Batoot";
   this.Client_Name="Rawda";
   this.IsPurshased=true;
   this.Discount=DiscountOffers_Enum.Discount;
  }

  ngOnInit(): void {
  }

}
