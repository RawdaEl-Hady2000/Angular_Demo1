import { Component, OnInit } from '@angular/core';
// import { IcategoryComponent } from './icategory/icategory.component';
import { IProduct } from '../Shared-Classes-and-Types/Iproduct_Interface';
import { DiscountOffers_Enum } from '../Shared-Classes-and-Types/DiscountOffers_Enum';
// import { ICategory } from './icategory/icategory.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  ProductList:IProduct;     // this is the first interface
  CategoryList:ICategory[];  // this is the secound interface
  Store_Name:string ;     // this is a property 
  Store_Logo:string ;    // this is a property 
  Client_Name:string;   // this is a property 
  IsPurshased:boolean; // this is a property 
  Discount:DiscountOffers_Enum.Discount;  // this is a property  as Enum
    DivMsg:string=""
    IsFlag:boolean=true;
  // variable to store Img_path
  imgURL:string="Batoot.jpg";

  constructor() 
  {
   this.ProductList={ID:3,Name:"Cream",Quantity:300,Price:3000,Img:""} //data of the  first interface
   this.CategoryList=[{ID:4,Name:"SkinCare"}] //data of the  secound interface
   this.Store_Logo="Batoot.jpg";
   this.Store_Name="Batoot";
   this.Client_Name="Rawda";
   this.IsPurshased=true;
   this.Discount=DiscountOffers_Enum.Discount;
    
  }
  isSelected(){
    this.DivMsg="Thanks for purchasing from our Store";
    this.IsFlag=false;
  }
  ngOnInit(): void {
  }

  
}
