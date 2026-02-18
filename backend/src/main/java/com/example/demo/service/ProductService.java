package com.example.demo.service;

import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.PageRequestDTO;
import com.example.demo.dto.PageResponseDTO;
import com.example.demo.dto.ProductDTO;

@Transactional
public interface ProductService {

	PageResponseDTO<ProductDTO> getList(PageRequestDTO pageRequestDTO);
	
	Long register(ProductDTO productDTO);
	
	ProductDTO get(Long pno);
	
	void modify(ProductDTO productDTO);
	
	void remove(Long pno);
}
