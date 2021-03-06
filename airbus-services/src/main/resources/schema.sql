DROP TABLE IF EXISTS TBL_EMPLOYEES;
 
CREATE TABLE TBL_EMPLOYEES (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  email VARCHAR(250) DEFAULT NULL
);


DROP TABLE IF EXISTS PRODUCTS;

CREATE TABLE PRODUCTS(
	product_id VARCHAR(3) PRIMARY KEY,
	product_category VARCHAR(50) NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	product_description VARCHAR(50) NOT NULL,
	product_units INT NOT NULL
);
