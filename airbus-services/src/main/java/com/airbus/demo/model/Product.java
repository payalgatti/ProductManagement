package com.airbus.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="PRODUCTS")
public class Product {

	@Id
	@Column(name="product_id")
	private String id;
	
	@Column(name="product_category")
	private String category;
	
	@Column(name="product_name")
	private String name;
	
	@Column(name="product_description")
	private String description;
	
	@Column(name="product_units")
	private int units;
	
	public Product() {
		
	}

	public Product(String id, String category, String name, String description, int units) {
		super();
		this.id = id;
		this.category = category;
		this.name = name;
		this.description = description;
		this.units = units;
	}

	@Override
	public String toString() {
		return "Products [id=" + id + ", category=" + category + ", name=" + name + ", description=" + description
				+ ", units=" + units + "]";
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getUnits() {
		return units;
	}

	public void setUnits(int units) {
		this.units = units;
	}
	
	
	
}
