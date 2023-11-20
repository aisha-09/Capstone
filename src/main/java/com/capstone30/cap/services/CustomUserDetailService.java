package com.capstone30.cap.services;

import com.capstone30.cap.models.User;
import com.capstone30.cap.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("djkhfdfklhfdgkl");
        System.out.println(username);
        User user=userRepo.findByEmail(username).orElseThrow(()->new RuntimeException("User not found"));
        return user;
    }
}
