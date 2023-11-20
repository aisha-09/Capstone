package com.capstone30.cap.repository;

import com.capstone30.cap.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepo extends MongoRepository<User,String> {

    public Optional<User> findByEmail(String email);
}
