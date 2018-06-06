package com.thetriplet3.af.book.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="books")
public class Book {
    @Id
    private String _id;

    private String name;
    private String isbn;
    private float price;
    private String year;
    private String author;

    public String getName() {
        return name;
    }

    public String getIsbn() {
        return isbn;
    }

    public String getYear() {
        return year;
    }

    public String getAuthor() {
        return author;
    }

    public float getPrice(){
        return price;
    }
    public String getId(){
        return _id;
    }
}
