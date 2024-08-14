package com.example.server.controller;

import com.example.server.model.Blog;
import com.example.server.model.User;
import com.example.server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping("/")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{user}")
    public User getUser(@PathVariable User user){
        return userService.getUser(user);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User authUser) throws Exception {
        return userService.login(authUser);
    }

    @PutMapping("/{user}")
    public User updateUser(@RequestBody User newUser, @PathVariable User user){
        return userService.updateUser(newUser, user);
    }

    @DeleteMapping("/{user}")
    public void deleteUser(@PathVariable User user){
        userService.deleteUser(user);
    }

    @GetMapping("/{user}/blog")
    public List<Blog> getBlogs(@PathVariable User user){
        return userService.getBlogs(user);
    }

}
