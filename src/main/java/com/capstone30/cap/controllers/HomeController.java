package com.capstone30.cap.controllers;

import com.capstone30.cap.models.User;
import com.capstone30.cap.repository.UserRepo;
import com.capstone30.cap.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/home")
@CrossOrigin(origins = "*")
public class HomeController {

    @Autowired
    private UserService userService;
//    @Autowired
//    private UserRepo userRepo;
    @GetMapping("/users")
    public List<User> getAllUsers(){
        System.out.println("getting users");
        return userService.getUsers();
    }

    @GetMapping("/current-user")
    public String getLoggedInUser(Principal principal){
        return principal.getName();
    }

}
