package com.thetriplet3.af.book.repository;

import com.thetriplet3.af.book.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BookRepository extends MongoRepository<Book,String> {
}
