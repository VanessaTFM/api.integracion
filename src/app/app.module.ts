import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { NewClienteComponent } from './clientes/new-cliente/new-cliente.component';

import { ListProductosComponent } from './productos/list-productos/list-productos.component';
import { NewProductosComponent } from './productos/new-productos/new-productos.component';
import { ListVentasComponent } from './ventas/list-ventas/list-ventas.component';
import { DataTablesModule } from 'angular-datatables';

import { HttpClientModule } from  '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    ListClientesComponent,
    NewClienteComponent,
    ListProductosComponent,
    NewProductosComponent,
    ListVentasComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
   
   
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
  
    MatInputModule,
    
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
