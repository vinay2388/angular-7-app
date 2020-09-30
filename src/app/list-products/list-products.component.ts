import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductModel } from '../ProductModel';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html'
})
export class ListProductsComponent implements OnInit {


  products: ProductModel[];

  constructor(private formBuilder: FormBuilder,private productService: ProductService, private router: Router) { }

  display: any;
  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.getAllProducts();
    this.addForm = this.formBuilder.group({
      name: ['']
    });
  
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(data=>{
      this.products = data;
    
    });
  };

  // addProduct(): void {
  //   this.router.navigate(['add-products']);
  // }
  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.productService.addProduct(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      })
      this.getAllProducts();
    }
    
  }
  onCloseHandled(){
    this.display='none';
  }
  openModal(){
    this.display='block';
  }


  deleteProduct(product: ProductModel){
    
    this.productService.deleteProduct(product._id).subscribe(data=>{
      console.log(data)
      this.getAllProducts();
    });
  }

  updateProduct(product: ProductModel){
    localStorage.removeItem("productId");
    localStorage.setItem("productId", product._id);
    this.router.navigate(['edit-products']);
  }
 
  get f() { return this.addForm.controls; }
}