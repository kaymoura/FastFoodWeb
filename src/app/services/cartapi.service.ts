import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartDataList:any =[];
  productList= new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  // Obter dados do produto
  getProductData(){
    return this.productList.asObservable();
    
  }

  // Definir dados do produto
  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product)
  }

  // Obter o valor total 
  getTotalAmount(){
    let grandTotal=0;
    this.cartDataList.map((a:any)=> {
      grandTotal += a.total;
    })
  }

  // Adicionar detalhes ao carrinho
  addToCart(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList)
  }

  // Remove os dados do carrinho um por um
  removeCartdata(product:any){
    this.cartDataList.map((a:any, index:any)=> {
      if(product.id === a.id){
        this.cartDataList.splice(index,1)
      }
    })
    this.productList.next(this.cartDataList)
  }

  // Remove todos os dados
  removeAllCart(){
    this.cartDataList = []
    this.productList.next(this.cartDataList)
  }
}
