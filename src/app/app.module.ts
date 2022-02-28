import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ContentProjectComponent } from './content-project/content-project.component';
import { FormsModule } from '@angular/forms';
import { DropDownComponent } from './products/drop-down/drop-down.component';
// import {Icategory} from './Shared-Classes-and-Types/Icategory_Interface';
import { IcategoryComponent } from './products/icategory/icategory.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ContentProjectComponent,
    DropDownComponent,
    IcategoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
