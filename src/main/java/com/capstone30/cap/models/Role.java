package com.capstone30.cap.models;

import lombok.*;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.Set;
import java.util.Collections;


import java.util.Set;
import java.util.stream.Collectors;

import static com.capstone30.cap.models.Permissions.*;

//@RequiredArgsConstructor
//@AllArgsConstructor
//@NoArgsConstructor
//public enum Role {
//    USER(
//            Set.of(
//                USER_CREATE,
//                USER_DELETE,
//                USER_UPDATE,
//                USER_READ
//            )
//    ),
//    ADMIN(
//            Set.of(
//                    ADMIN_READ,
//                    ADMIN_UPDATE,
//                    ADMIN_DELETE,
//                    ADMIN_CREATE,
//                    USER_CREATE,
//                    USER_DELETE,
//                    USER_UPDATE,
//                    USER_READ
//            )
//    );
//
//    @Getter
//    private static final Set<Permissions> permissions;
//
////    Role(Set<Permissions> adminRead) {
////
////    }
//
//    public List<SimpleGrantedAuthority> getAuthorities(){
//       var authorities= new java.util.ArrayList<>(getPermissions()
//               .stream()
//               .map(permissions -> new SimpleGrantedAuthority(permissions.name()))
//               .toList());
//       authorities.add(new SimpleGrantedAuthority(this.name()));
//       return authorities;
//    };
//}
@RequiredArgsConstructor
public enum Role {

//    USER(Collections.emptySet()),
    ADMIN(
            Set.of(
                    ADMIN_READ,
                    ADMIN_UPDATE,
                    ADMIN_DELETE,
                    ADMIN_CREATE,
                    USER_READ,
                    USER_UPDATE,
                    USER_DELETE,
                    USER_CREATE
            )
    ),
    USER(
            Set.of(
                    USER_READ,
                    USER_UPDATE,
                    USER_DELETE,
                    USER_CREATE
            )
    )

    ;

    @Getter
    private final Set<Permissions> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
