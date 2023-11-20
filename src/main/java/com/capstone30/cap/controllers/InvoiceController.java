package com.capstone30.cap.controllers;

import com.capstone30.cap.exceptions.ResourceNotFoundException;
import com.capstone30.cap.models.Invoice;
import com.capstone30.cap.repository.InvoiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1")
public class InvoiceController {

    @Autowired
    private InvoiceRepo invoiceRepo;

    //get all api
    @GetMapping("/invoices")
    public List<Invoice> getAllInvoices(){
        return invoiceRepo.findAll();
    }

    //create bill api
    @PostMapping("/invoices")
    public Invoice createInvoice(@RequestBody Invoice invoice){
        return invoiceRepo.save(invoice);
    }

//    @PostMapping(value = "/save")
//    private String saveInvoice(@RequestBody Invoice invoice){
//        return invoice.getId();
//    }

    //get bill by id
    @GetMapping("/invoices/{id}")
    public ResponseEntity<Invoice> getInvoiceById(@PathVariable String id){
        Invoice invoice=invoiceRepo.findById(id).
                orElseThrow(()-> new ResourceNotFoundException("Invoice does not exist"));
        return ResponseEntity.ok(invoice);
    }

//    @GetMapping("invoices/{id}")
//    public Invoice getInvoiceById(@PathVariable String id) {
//        Optional<Invoice> optionalInvoice = invoiceRepo.findById(id);
//        if (optionalInvoice.isPresent()) {
//            return optionalInvoice.get();
//        } else {
//            throw new ResourceNotFoundException("Invoice does not exist with id: " + id);
//        }
//    }

    //update invoice api
    @PutMapping("/invoices/{id}")
    public ResponseEntity<Invoice> updateInvoice(@PathVariable String id, @RequestBody Invoice invoiceDetails){

        Invoice invoice=invoiceRepo.findById(id).
                orElseThrow(()-> new ResourceNotFoundException("Invoice does not exist"));
        invoice.setStatus(invoiceDetails.getStatus());
        invoice.setUser_id(invoiceDetails.getUser_id());
        invoice.setVendor_name(invoiceDetails.getVendor_name());
        Invoice updatedInvoice=invoiceRepo.save(invoice);
        return ResponseEntity.ok(updatedInvoice);

    }

    //delete bill api
    @DeleteMapping("invoices/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBill(@PathVariable String id){
        Invoice invoice=invoiceRepo.findById(id).
                orElseThrow(()-> new ResourceNotFoundException("Invoice does not exist"));
        invoiceRepo.delete(invoice);
        Map<String, Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
