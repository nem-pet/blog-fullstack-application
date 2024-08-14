package com.example.server.service;

import com.example.server.model.Blog;
import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User saveUser(User user)
    {
        return userRepository.save(user);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUser(User user) {
        return user;
    }

    public Map<String, Object> login(User authUser) throws Exception {
        User user = userRepository.findByUsername(authUser.getUsername());
        Map<String, Object> result = new HashMap<>();
        if (user != null && user.getPassword().equals(authUser.getPassword())) {
            result.put("user", user);
            return result;
        } else {
            throw new Exception("Invalid credentials");
        }
    }

    public User updateUser(User newUser, User user) {
        user.setPassword(newUser.getPassword());
        user.setPhonenumber(newUser.getPhonenumber());
        user.setEmail(newUser.getEmail());
        return userRepository.save(user);
    }

    public void deleteUser(User user){
        userRepository.delete(user);
    }
    public List<Blog> getBlogs(User user){
        return user.getBlogs();
    }
}
