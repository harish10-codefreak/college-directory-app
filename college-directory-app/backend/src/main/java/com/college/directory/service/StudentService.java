package com.college.directory.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.college.directory.model.StudentProfile;
import com.college.directory.repository.StudentProfileRepository;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentProfileRepository studentProfileRepository;

    public StudentProfile getProfile(Long id) {
        return studentProfileRepository.findById(id).orElse(null);
    }

    public List<StudentProfile> searchStudents(String name) {
        // Implement search logic
        return null;
    }

    public List<StudentProfile> getAdvisors(Long id) {
        // Implement advisor retrieval logic
        return null;
    }
}
