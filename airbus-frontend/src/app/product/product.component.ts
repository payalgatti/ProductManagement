import { Component, Input, OnInit, PipeTransform} from '@angular/core';
import { HttpClientService, Product } from '../service/httpclient.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() products : Product[];
  toggle: boolean = false;
  displayToggle: boolean = true;
  currentProduct: Product;
  filter = new FormControl('');
  filteredProducts: Observable<Product[]>;
  searchedProducts : Product[] = [];

  public allCategories : string[];
  selectedCategory : string;
  searchValue : any;

  constructor(
    private router: Router,
    private httpClientService: HttpClientService) {
      this.filteredProducts = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text))
      );
  }

  ngOnInit() {

    this.httpClientService.getProducts().subscribe(
      response => this.success(response),
    );

    this.httpClientService.getCategories().subscribe(
      response1 => this.success1(response1)
    );
  }

  updateProduct(product:Product){
    this.currentProduct = product;
    this.toggle = true;
    this.displayToggle = false;
    this.router.navigateByUrl("/update", { state: this.currentProduct });
  }

  success(response: Product[]){
    this.products = response;
  }

  success1(response:string[]): void {
    this.allCategories = response
  }

  // onSearch(){
  //   this.filteredProducts = this.filter.valueChanges.pipe(
  //     startWith(''),
  //     map(text => search(text))
  //   );
  //   this.filteredProducts.subscribe(
  //     response => this.success(response)
  //   );
  // }
  
  getProductsByCategory(){
    this.httpClientService.getProductsByCategory(this.selectedCategory).subscribe(
      res => this.handleSuccess(res)
    );
  }
  handleSuccess(res: Product[]): void {
    this.products = res;
  }

  // search($event) {

  //   const filteredProducts: Product[] = [];
  //   const term = $event.target.value.toLowerCase();
  //   this.products.forEach((product) => {
  //     if(product.id.toLowerCase().includes(term)
  //       || product.name.toLowerCase().includes(term)
  //       || product.category.toLowerCase().includes(term)
  //       || product.description.toLowerCase().includes(term)
  //       || product.units == term){

  //         filteredProducts.push(product);
  //       }
  //   });    

  //   this.products = filteredProducts;
  // }

  search($event): Product[] {
    const tempProducts : Product[] = this.products;
    this.searchedProducts = [];
    return tempProducts.filter(product => {
      this.products = [];
      
      //this.products = this.tempProducts;
      const term = $event.target.value;   

      console.log(product.id, product.id.toLowerCase().includes(term.toLowerCase())
      || product.name.toLowerCase().includes(term.toLowerCase())
      || product.category.toLowerCase().includes(term.toLowerCase())
      || product.description.toLowerCase().includes(term.toLowerCase())
      || product.units.toString().includes(term.toString()));

      if(product.id.toLowerCase().includes(term.toLowerCase())
      || product.name.toLowerCase().includes(term.toLowerCase())
      || product.category.toLowerCase().includes(term.toLowerCase())
      || product.description.toLowerCase().includes(term.toLowerCase())
      || product.units.toString().includes(term.toString())){
        console.log(product);
        this.searchedProducts.push(product);
      }
        
      this.products = this.searchedProducts;
      return this.searchedProducts;

     
    });
  }

}
