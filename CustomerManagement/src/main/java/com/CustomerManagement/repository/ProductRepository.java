package com.CustomerManagement.repository;

import com.CustomerManagement.core.Product;
import com.CustomerManagement.core.enums.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByType(Type type);
}
