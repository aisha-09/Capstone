package com.capstone30.cap.repository;

import com.capstone30.cap.models.Invoice;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InvoiceRepo extends MongoRepository<Invoice,String> {
}
