package com.blog.server.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.blog.server.model.Blog;
import com.blog.server.repository.BlogRepository;

@RestController
@RequestMapping("/blog")
@CrossOrigin
public class BlogController {

    private final BlogRepository blogRepository;

    BlogController(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @SuppressWarnings("null")
    @PostMapping("/saveBlog")
    public void saveBlog(@RequestBody Blog blog) {
        blogRepository.save(blog);
    }

    @GetMapping("/getBlog")
    public List<Blog> getBlogs() {
        return blogRepository.findAll();
    }

    @PutMapping("/{blog}")
    public Boolean updateBlog(@RequestBody Blog newBlog, @PathVariable Blog blog) {
        blog.setText(newBlog.getText());
        blogRepository.save(blog);
        return true;
    }

    @SuppressWarnings("null")
    @DeleteMapping("/{blog}")
    public void deleteBlog(@PathVariable Blog blog) {
        blogRepository.delete(blog);
    }
}
