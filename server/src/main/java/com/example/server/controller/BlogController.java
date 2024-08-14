package com.example.server.controller;

import com.example.server.model.Blog;
import com.example.server.service.BlogService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
@CrossOrigin
@AllArgsConstructor
public class BlogController {

    private final BlogService blogService;

    @PostMapping("/saveBlog")
    public Blog saveBlog(@RequestBody Blog blog){
        return blogService.saveBlog(blog);
    }

    @GetMapping("/getBlog")
    public List<Blog> getBlogs(){
        return blogService.getBlogs();
    }

    @PutMapping("/{blog}")
    public Blog updateBlog(@RequestBody Blog newBlog ,@PathVariable Blog blog){
        return blogService.updateBlog(newBlog, blog);
    }

    @DeleteMapping("/{blog}")
    public void deleteBlog(@PathVariable Blog blog){
        blogService.deleteBlog(blog);
    }
}
