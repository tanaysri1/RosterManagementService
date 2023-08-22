package com.javatechie.springbootcrudexample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatechie.springbootcrudexample.entity.Product;
import com.javatechie.springbootcrudexample.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private  ProductRepository repository;
	
	//save single product
	public Product saveProduct(Product product)
	{
	 return repository.save(product);
	}
	
	//save list of products
	public List<Product> saveProducts(List<Product> products)
	{
		 return repository.saveAll(products);
	}
	
	//get all product
	public List<Product> getProducts()
	{
		 return repository.findAll();
	}
	
	//get single product by id
	public Product getProductById(int id)
	{
		 return repository.findById(id).orElse(null);
	}
	
	//get product by name
	public Product getProductByName(String name)
	{
		 return repository.findByName(name);  
	}
	
	public String deleteProduct(int id)
	{
		repository.deleteById(id);
		return "product removed !!!" + id;
		
	}
	//update the product
	public Product updateProduct(Product product)
	{
		Product existingProduct = repository.findById(product.getId()).orElse(null);
		existingProduct.setName(product.getName());
		existingProduct.setQuantity(product.getQuantity());
		existingProduct.setPrice(product.getPrice());
		 return repository.save(existingProduct);
	}
	
	
}
 