package com.capstone30.cap.models;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "User")

public class User implements UserDetails {

//    private User user;
//
//    public User(User user) {
//        super();
//        this.user = user;
//    }

    @Id
    private String userId;
    private String userName;
    private String email;
    private String password;
    private String role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
//        SimpleGrantedAuthority simpleGrantedAuthority=new SimpleGrantedAuthority(user.getRole());
//
//        return List.of(simpleGrantedAuthority);
//        return role.getAuthorities();
        return null;
    }
//@Override
//public Collection<? extends GrantedAuthority> getAuthorities() {
//    return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + this.role));
//}

//    private String getRole() {
//        return null;
//    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

//    public String getUserId() {
//        return userId;
//    }
//
//    public String getUserName() {
//        return userName;
//    }
//
//    public void setUserId(String userId) {
//        this.userId = userId;
//    }
//
//    public void setUserName(String userName) {
//        this.userName = userName;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//

//
//    public User(String userId, String userName, String email) {
//        this.userId = userId;
//        this.userName = userName;
//        this.email = email;
//    }
}
