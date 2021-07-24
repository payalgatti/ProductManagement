import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Product } from '../service/httpclient.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product = new Product("","","","",0)
  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addProduct(){
    this.httpClientService.addProduct(this.product).subscribe(
      response => this.handleSuccess()
    );
  }

  handleSuccess(): void {
    //alert("Employee created successfully.");
    this.router.navigateByUrl("");
  }
  

}

