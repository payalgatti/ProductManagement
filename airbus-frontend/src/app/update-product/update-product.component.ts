import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { HttpClientService, Product } from '../service/httpclient.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  @Input() productForUpdate: Product;
  state: Observable<object>;

  constructor(
    private router: Router,
    private httpClintService: HttpClientService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state)).subscribe(
        response => {
          this.productForUpdate = response;
        }
      )
  }

  updateProduct(){
    this.httpClintService.updateProduct(this.productForUpdate).subscribe(
      (response) => {
        this.handleSuccess()
      },
      (error) => {
        this.handleError()
      }
    );
    this.router.navigateByUrl("");
  }

  handleError() {
    console.log("Error : Product does not exist")
  }

  handleSuccess(): void {
    console.log("Product Updated Successfully")
  }
}

