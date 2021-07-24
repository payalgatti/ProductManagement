import { Component, OnInit } from '@angular/core';
import { HttpClientService, Product } from '../service/httpclient.service';

@Component({
  selector: 'app-categorywise-products',
  templateUrl: './categorywise-products.component.html',
  styleUrls: ['./categorywise-products.component.css']
})
export class CategorywiseProductsComponent implements OnInit {

  public allCategories : string[];
  selectedCategory : string;
  products : Product[];

  constructor(
    private httpClientService : HttpClientService,
  ) { }

  ngOnInit() {
    this.httpClientService.getCategories().subscribe(
      response => this.success(response)
    );
  }
  success(response:string[]): void {
    this.allCategories = response
  }

  getProductsByCategory(){
    this.httpClientService.getProductsByCategory(this.selectedCategory).subscribe(
      res => this.handleSuccess(res)
    );
  }
  handleSuccess(res: Product[]): void {
    this.products = res;
  }

}
