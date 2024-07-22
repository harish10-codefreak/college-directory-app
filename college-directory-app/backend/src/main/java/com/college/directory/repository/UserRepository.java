package com.college.directory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.directory.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
