package com.blog.server.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.blog.server.model.Blog;
import com.blog.server.model.User;
import com.blog.server.repository.UserRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    private final UserRepository userRepository;

    UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @SuppressWarnings("null")
    @PostMapping("/register")
    public void saveUser(@RequestBody User user) {
        userRepository.save(user);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User authUser) throws Exception {
        User user = userRepository.findByUsername(authUser.getUsername());
        Map<String, Object> result = new HashMap<>();
        if (user != null && user.getPassword().equals(authUser.getPassword())) {
            result.put("user", user);
            return result;
        } else {
            throw new Exception("Invalid credentials");
        }
    }

    @GetMapping("/")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{user}")
    public User getUser(@PathVariable User user) {
        return user;
    }

    @PutMapping("/{user}")
    public Boolean updateUser(@RequestBody User newUser, @PathVariable User user) {
        user.setPassword(newUser.getPassword());
        user.setPhonenumber(newUser.getPhonenumber());
        user.setEmail(newUser.getEmail());
        userRepository.save(user);
        return true;
    }

    @SuppressWarnings("null")
    @DeleteMapping("/{user}")
    public void deleteUser(@PathVariable User user) {
        userRepository.delete(user);
    }

    @GetMapping("/{user}/blog")
    public List<Blog> getBlogs(@PathVariable User user) {
        return user.getBlogs();
    }

}
