package com.capstone30.cap.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Item {

    private String name;
    private double price;
    private int quantity;

    public Item(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
