import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { ProductModel } from './ProductModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  ROOT_URL : String = "http://localhost:1234/";
  

  getAllProducts(){
    return this.http.get<ProductModel[]>(this.ROOT_URL + 'Products');
  }

  getProductById(_id: String){
    return this.http.get<ProductModel[]>(this.ROOT_URL + 'Products' + '/' + _id);
  }

  addProduct(product: ProductModel[]){
    return this.http.post(this.ROOT_URL + 'Products' + '/'+'create',product);
  }

  deleteProduct(_id: String){
    return this.http.delete(this.ROOT_URL + 'Products' + '/' + _id + '/' +'delete');
  }

  updateProduct(productId: ProductModel){
    
    return this.http.put(this.ROOT_URL+ 'Products' + '/' + productId._id+ '/' + 'update',productId);
  }

  
}