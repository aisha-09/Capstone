package com.capstone30.cap.models;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class JwtResponse {
    private String email;
    private String password;
    private String jwtToken;
    private String username;
}
