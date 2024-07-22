package com.college.directory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.directory.model.FacultyProfile;

public interface FacultyProfileRepository extends JpaRepository<FacultyProfile, Long> {
}
