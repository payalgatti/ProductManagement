package com.airbus.demo.service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.airbus.demo.exception.RecordNotFoundException;
import com.airbus.demo.model.Product;
import com.airbus.demo.repository.ProductsRepository;

@Service
public class ProductsService {

	@Autowired
	ProductsRepository productsRepository;

	public List<Product> getAllProducts() {
		List<Product> products = productsRepository.findAll();
		if (products.size() > 0) {
			return products;
		} else {
			return new ArrayList<Product>();
		}
	}

	public List<Product> getProducts(String category) throws RecordNotFoundException {
		List<Product> products = productsRepository.findByCategory(category);
		if (products.size() > 0) {
			// do nothing
		} else {
			throw new RecordNotFoundException("No products available for" + category + ". Choose different category.");
		}
		return products;
	}

	public Product addProduct(Product product) {
		product = productsRepository.save(product);
		return product;
	}

	public Product updateProduct(Product product) throws RecordNotFoundException {
		Optional<Product> updated = productsRepository.findById(product.getId());
		if (updated.isPresent()) {
			product = productsRepository.save(product);
			return product;
		} else {
			throw new RecordNotFoundException("Product is not in records. Add product before updation.");
		}
	}
	
	public Set<String> getCategories(){
		Set<String> categories = new LinkedHashSet<>();
		List<Product> products = getAllProducts();
		for(Product pr : products) {
			categories.add(pr.getCategory());
		}
		return categories;
	}

}
