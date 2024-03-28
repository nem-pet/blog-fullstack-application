package com.blog.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blog.server.model.Blog;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Integer> {

}
