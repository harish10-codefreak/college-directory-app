package com.college.directory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.college.directory.model.StudentProfile;
import com.college.directory.service.StudentService;

import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/profile/{id}")
    public StudentProfile getProfile(@PathVariable Long id) {
        return studentService.getProfile(id);
    }

    @GetMapping("/search")
    public List<StudentProfile> searchStudents(@RequestParam String name) {
        return studentService.searchStudents(name);
    }

    @GetMapping("/advisors/{id}")
    public List<StudentProfile> getAdvisors(@PathVariable Long id) {
        return studentService.getAdvisors(id);
    }
}
