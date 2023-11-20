package com.capstone30.cap.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;

@Getter
@Setter
@Document(collection = "Bill")
public class Invoice {

    @Id
//    @Field("_id")
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
    private String id;

    //    @Transient
//    private SequenceGenerator sequenceGenerator;
    private int user_id;
    //private Date bill_date;
//    @JsonProperty("vendorName")
    private String vendor_name;

    //    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date bill_date;
    private ArrayList<Item> items;
    private double taxes;
    private double discounts;
    private double total_amt;
    private String status;
    private String client_name;
    private String client_address;


    public Invoice() {
    }


    public Invoice(int user_id, Date bill_date, String vendor_name, ArrayList<Item> items, double taxes, double discounts, double total_amt, String status
    ,String client_name,String client_address) {
        this.user_id = user_id;
        this.bill_date = bill_date;
        this.vendor_name = vendor_name;
        this.items = items;
        this.taxes = taxes;
        this.discounts = discounts;
        this.total_amt = total_amt;
        this.status = status;
        this.client_name=client_name;
        this.client_address=client_address;

    }

//    public String getId() {
//        return id;
//    }

//    public int getUser_id() {
//        return user_id;
//    }
////
//    public Date getBill_date() {
//        return bill_date;
//    }
//
//    public String getVendor_name() {
//        return vendor_name;
//    }

//    public ArrayList<String> getItems() {
//        return items;
//    }

//    public double getTaxes() {
//        return taxes;
//    }
//
//    public double getDiscounts() {
//        return discounts;
//    }
////
//    public double getTotal_amt() {
//        return total_amt;
//    }
//
//    public String getStatus() {
//        return status;
//    }
////
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public void setUser_id(int user_id) {
//        this.user_id = user_id;
//    }
////
//    public void setBill_date(Date bill_date) {
//        this.bill_date = bill_date;
//    }
//
//    public void setVendor_name(String vendor_name) {
//        this.vendor_name = vendor_name;
//    }

//    public void setItems(ArrayList<String> items) {
//        this.items = items;
//    }

//    public void setTaxes(double taxes) {
//        this.taxes = taxes;
//    }
//
//    public void setDiscounts(double discounts) {
//        this.discounts = discounts;
//    }
////
//    public void setTotal_amt(double total_amt) {
//        this.total_amt = total_amt;
//    }
//
//    public void setStatus(String status) {
//        this.status = status;
//    }
}