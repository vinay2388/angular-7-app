import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-products/add-products.component';
import { EditProductComponent } from './edit-products/edit-products.component';

const routes: Routes = [
  { path: 'add-products', component: AddProductComponent },
  { path: 'edit-products', component: EditProductComponent},
  { path: '', component: ListProductsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }