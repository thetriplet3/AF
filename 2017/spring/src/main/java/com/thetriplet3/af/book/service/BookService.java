package com.thetriplet3.af.book.service;

import com.thetriplet3.af.book.model.Book;
import com.thetriplet3.af.book.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/books")
public class BookService {

    @RequestMapping("/")
    public String Welcome() {
        return "Hello";
    }

    @Autowired
    private BookRepository bookRepository;

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET)
    public List<Book> GetAllBooks() {
        List<Book> bookList = null;
        try {
            bookList = bookRepository.findAll();
        } catch(Exception e) {
            e.printStackTrace();
        } finally {
            return bookList;
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/total", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public float CalculatePrice(@RequestBody String[] bookIdList ) {

        Book instance = null;
        float totalPrice = 0;
        try {

            for(String id : bookIdList) {
                instance = getBookById(id);
                if(instance != null) {
                    totalPrice = totalPrice + instance.getPrice();
                }
            }

        }catch(Exception e) {
            e.printStackTrace();
        }

        return totalPrice;
    }

    private Book getBookById(String id) {
        Book instance = null;
        float totalPrice = 0;

        try {
            List<Book> bookList = bookRepository.findAll();

            for(Book book : bookList) {
                if(book.getId().equals(id)) {
                    instance = book;
                }
            }
        }catch(Exception e) {
            e.printStackTrace();
        }

        return instance;
    }

}
