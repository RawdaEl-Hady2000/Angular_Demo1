import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  GetAllProducts()
  {
    // this function return all product if any componet call that 
    return [
      {ID:3,Name:"Cream",Quantity:300,Price:3000,Img:"../../images/hj.jpg"}, //data of the  first interface
      {ID:5,Name:"Shampoo",Quantity:300,Price:3000,Img:"../../images/kk.jpg"},
      {ID:8,Name:"LipGlose",Quantity:300,Price:3000,Img:"../../images/gh.jpg"},
      {ID:20,Name:"Perfume",Quantity:300,Price:3000,Img:"../../images/lo.jpg"},
      {ID:13,Name:"Spray",Quantity:300,Price:3000,Img:"../../images/ll.jpg"}
   
     ] 
  } 
  GetProductById(prdId)
  {

  }
  constructor() { }
}
