package com.college.directory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.directory.model.StudentProfile;

public interface StudentProfileRepository extends JpaRepository<StudentProfile, Long> {
}
