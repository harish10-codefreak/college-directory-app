package com.college.directory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.directory.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
