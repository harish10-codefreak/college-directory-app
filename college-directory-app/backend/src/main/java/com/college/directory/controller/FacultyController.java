package com.college.directory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.college.directory.model.FacultyProfile;
import com.college.directory.model.Course;
import com.college.directory.service.FacultyService;

import java.util.List;

@RestController
@RequestMapping("/api/faculty")
public class FacultyController {

    @Autowired
    private FacultyService facultyService;

    @GetMapping("/classlist/{id}")
    public List<Course> getClassList(@PathVariable Long id) {
        return facultyService.getClassList(id);
    }

    @PostMapping("/updateProfile")
    public FacultyProfile updateProfile(@RequestBody FacultyProfile profile) {
        return facultyService.updateProfile(profile);
    }
}
