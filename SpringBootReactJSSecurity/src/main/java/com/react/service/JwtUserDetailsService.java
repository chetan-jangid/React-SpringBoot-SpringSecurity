package com.react.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class JwtUserDetailsService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if ("admin".equals(username)) {
            return new User("admin", "$2a$10$cEwvlMC5tWEJSHVcZHVDK.WYJkt0u6MYy.4r3e6tO37ApNq7Lcwvi", new ArrayList<>());
        }
        throw new UsernameNotFoundException("User not found with username: " + username);
    }
}
