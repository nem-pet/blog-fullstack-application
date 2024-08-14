package com.example.server.service;

import com.example.server.model.Blog;
import com.example.server.repository.BlogRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BlogService {

    private final BlogRepository blogRepository;

    public Blog saveBlog(Blog blog){
        return blogRepository.save(blog);
    }

    public List<Blog> getBlogs(){
       return blogRepository.findAll();
    }

    public Blog updateBlog(Blog newBlog, Blog blog){
        blog.setText(newBlog.getText());
        return blogRepository.save(blog);
    }

    public void deleteBlog(Blog blog){
        blogRepository.delete(blog);
    }
}
