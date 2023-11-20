package com.capstone30.cap.services;


import com.capstone30.cap.models.User;
import com.capstone30.cap.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

//    private List<User> store=new ArrayList<>();

//    public UserService(){
//        store.add(new User(UUID.randomUUID().toString(),"Aisha Jain","aisha@Gmail.com"));
//        store.add(new User(UUID.randomUUID().toString(),"Yash Jain","yash@Gmail.com"));
//        store.add(new User(UUID.randomUUID().toString(),"Cat","cat@Gmail.com"));
//        store.add(new User(UUID.randomUUID().toString(),"Dog","dog@Gmail.com"));
//
//    }

    public List<User> getUsers(){
        return userRepo.findAll();
    }

    public User createUser(User user){
        user.setUserId(UUID.randomUUID().toString());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }




}
