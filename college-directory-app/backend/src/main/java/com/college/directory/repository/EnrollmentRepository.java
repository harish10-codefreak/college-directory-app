package com.college.directory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.directory.model.Enrollment;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
}
