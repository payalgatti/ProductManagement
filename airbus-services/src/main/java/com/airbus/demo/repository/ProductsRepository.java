package com.airbus.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.airbus.demo.model.Product;

public interface ProductsRepository extends JpaRepository<Product, String> {

	public List<Product> findByCategory(String Category);
	
}
