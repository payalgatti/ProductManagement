package com.airbus.demo.web;

import java.util.List;
import java.util.Objects;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airbus.demo.exception.RecordNotFoundException;
import com.airbus.demo.model.Product;
import com.airbus.demo.service.ProductsService;


@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200"})
@RestController
@RequestMapping("/products")
public class ProductsController {

	@Autowired
	ProductsService productsService;
	
	@GetMapping("/{category}")
	public ResponseEntity<List<Product>> getProducts(@PathVariable("category") String category ) throws RecordNotFoundException {
		List<Product> products = null;
			products = productsService.getProducts(category);
			return new ResponseEntity<List<Product>>(products, new HttpHeaders(), HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Product>> getAllProducts(){
		List<Product> products = productsService.getAllProducts();
		return new ResponseEntity<List<Product>>(products, new HttpHeaders(), HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Product> addProduct(@RequestBody Product product){
		product = productsService.addProduct(product);
		if(Objects.isNull(product)) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}else {
			return new ResponseEntity<Product>(product, new HttpHeaders(), HttpStatus.CREATED);
		}
		
	}
	
	@PutMapping("/update")
	public ResponseEntity<Product> updateProduct(@RequestBody Product product) throws RecordNotFoundException{
		Product modified = productsService.updateProduct(product);
		return new ResponseEntity<Product>(modified, new HttpHeaders(), HttpStatus.OK);
	}
	
	@GetMapping("/categories")
	public ResponseEntity<Set<String>>getCategories(){
		Set<String> categories = productsService.getCategories();
		return new ResponseEntity<Set<String>>(categories, new HttpHeaders(), HttpStatus.OK); 
	}
	
}
