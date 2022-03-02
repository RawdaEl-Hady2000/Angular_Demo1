import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Shared-Classes-and-Types/Iproduct_Interface';
import { DiscountOffers_Enum } from '../Shared-Classes-and-Types/DiscountOffers_Enum';
import { ProductServiceService } from '../Services/product-service.service';

// import { ICategory } from './icategory/icategory.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  ProductList: IProduct[]; // this is the first interface
  CategoryList: ICategory[]; // this is the secound interface
  Store_Name: string; // this is a property 
  Store_Logo: string; // this is a property 
  Client_Name: string; // this is a property 
  IsPurshased: boolean; // this is a property 
  Discount: DiscountOffers_Enum.Discount; // this is a property  as Enum
  DivMsg: string = "";
  IsFlag: boolean = true;
  // variable to store Img_path
  imgURL: string = "Batoot.jpg";


  constructor(private prodServices: ProductServiceService) {
    this.ProductList = [
      //  {ID:3,Name:"Cream",Quantity:300,Price:3000,Img:"../../images/hj.jpg"}, //data of the  first interface
      //  {ID:5,Name:"Shampoo",Quantity:300,Price:3000,Img:"../../images/kk.jpg"},
      //  {ID:8,Name:"LipGlose",Quantity:300,Price:3000,Img:"../../images/gh.jpg"},
      //  {ID:20,Name:"Perfume",Quantity:300,Price:3000,Img:"../../images/lo.jpg"},
      //  {ID:13,Name:"Spray",Quantity:300,Price:3000,Img:"../../images/ll.jpg"}
    ];
    this.CategoryList = [{ ID: 4, Name: "SkinCare" }]; //data of the  secound interface
    this.Store_Logo = "Batoot.jpg";
    this.Store_Name = "Batoot";
    this.Client_Name = "Rawda";
    this.IsPurshased = true;
    this.Discount = DiscountOffers_Enum.Discount;

  }
  isSelected() {
    this.DivMsg = "Thanks for purchasing from our Store";
    this.IsFlag = false;
  }

  renderValues() { // this function used to call the function which in services to print all product 
    this.ProductList = this.prodServices.GetAllProducts();
  } 

  ngOnInit(): void {
      
  }

}
