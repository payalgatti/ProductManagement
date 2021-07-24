import { Component, OnInit } from '@angular/core';
import { HttpClientService, Product } from '../service/httpclient.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public allCategories : string[];
  selectedValue : string;
  specificProducts : Product[];

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

  getProductsByCategory(category: string){
    this.httpClientService.getProductsByCategory(category).subscribe(
      res => this.handleSuccess(res)
    );
  }
  handleSuccess(res: Product[]): void {
    this.specificProducts = res;
  }

}
