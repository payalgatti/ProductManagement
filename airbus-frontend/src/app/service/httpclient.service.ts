import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Product{
  constructor(
    public id: string,
    public category: string,
    public name: string,
    public description: string,
    public units: number
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  username = 'payal';
  password = 'password';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getProducts(){
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem("token") });
    return this.httpClient.get<Product[]>('http://localhost:8080/products', { headers });
  }

  updateProduct(product:Product){
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem("token") });
    return this.httpClient.put<Product>('http://localhost:8080/products/update', product, { headers });
  }

  addProduct(product:Product){
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem("token") });
    return this.httpClient.post<any>('http://localhost:8080/products/add', product, { headers });
  }

  getProductsByCategory(category:string){
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem("token") });
    return this.httpClient.get<Product[]>(`http://localhost:8080/products/${category}`, { headers });
  }

  getCategories(){
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem("token") });
    return this.httpClient.get<string[]>('http://localhost:8080/products/categories', { headers });
  }
}