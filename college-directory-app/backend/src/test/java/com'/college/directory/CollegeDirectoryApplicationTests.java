package com.college.directory;

import com.college.directory.model.*;
import com.college.directory.repository.*;
import com.college.directory.service.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
class CollegeDirectoryApplicationTests {

    @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private StudentProfileRepository studentProfileRepository;

    @MockBean
    private FacultyProfileRepository facultyProfileRepository;

    @MockBean
    private CourseRepository courseRepository;

    @MockBean
    private EnrollmentRepository enrollmentRepository;

    @MockBean
    private DepartmentRepository departmentRepository;

    @Test
    void contextLoads() {
    }

    @Test
    void testLoadUserByUsername() {
        User user = new User();
        user.setId(1L);
        user.setUsername("testuser");
        user.setPassword("password");
        user.setRole(Role.STUDENT);
        user.setName("Test User");
        user.setEmail("testuser@example.com");

        when(userRepository.findByUsername("testuser")).thenReturn(user);

        UserDetails userDetails = userService.loadUserByUsername("testuser");

        assertThat(userDetails).isNotNull();
        assertThat(userDetails.getUsername()).isEqualTo("testuser");
    }

    @Test
    void testLoadUserByUsername_NotFound() {
        when(userRepository.findByUsername("nonexistentuser")).thenReturn(null);

        assertThrows(UsernameNotFoundException.class, () -> {
            userService.loadUserByUsername("nonexistentuser");
        });
    }

    @Test
    void testSaveUser() {
        User user = new User();
        user.setId(1L);
        user.setUsername("newuser");
        user.setPassword("newpassword");
        user.setRole(Role.FACULTY_MEMBER);
        user.setName("New User");
        user.setEmail("newuser@example.com");

        when(userRepository.save(any(User.class))).thenReturn(user);

        User savedUser = userService.save(user);

        assertThat(savedUser).isNotNull();
        assertThat(savedUser.getUsername()).isEqualTo("newuser");
    }

    @Test
    void testGetStudentProfile() {
        StudentProfile profile = new StudentProfile();
        profile.setUserId(1L);
        profile.setYear("Sophomore");

        when(studentProfileRepository.findById(1L)).thenReturn(Optional.of(profile));

        StudentProfile fetchedProfile = studentProfileRepository.findById(1L).orElse(null);

        assertThat(fetchedProfile).isNotNull();
        assertThat(fetchedProfile.getYear()).isEqualTo("Sophomore");
    }

    @Test
    void testGetFacultyProfile() {
        FacultyProfile profile = new FacultyProfile();
        profile.setUserId(2L);
        profile.setOfficeHours("MWF 10-11am");

        when(facultyProfileRepository.findById(2L)).thenReturn(Optional.of(profile));

        FacultyProfile fetchedProfile = facultyProfileRepository.findById(2L).orElse(null);

        assertThat(fetchedProfile).isNotNull();
        assertThat(fetchedProfile.getOfficeHours()).isEqualTo("MWF 10-11am");
    }

    @Test
    void testGetCourse() {
        Course course = new Course();
        course.setId(1L);
        course.setTitle("Computer Science 101");
        course.setDescription("Introduction to Computer Science");

        when(courseRepository.findById(1L)).thenReturn(Optional.of(course));

        Course fetchedCourse = courseRepository.findById(1L).orElse(null);

        assertThat(fetchedCourse).isNotNull();
        assertThat(fetchedCourse.getTitle()).isEqualTo("Computer Science 101");
    }

    @Test
    void testGetEnrollment() {
        Enrollment enrollment = new Enrollment();
        enrollment.setId(1L);
        enrollment.setStudentId(1L);
        enrollment.setCourseId(1L);

        when(enrollmentRepository.findById(1L)).thenReturn(Optional.of(enrollment));

        Enrollment fetchedEnrollment = enrollmentRepository.findById(1L).orElse(null);

        assertThat(fetchedEnrollment).isNotNull();
        assertThat(fetchedEnrollment.getStudentId()).isEqualTo(1L);
    }

    @Test
    void testGetDepartment() {
        Department department = new Department();
        department.setId(1L);
        department.setName("Computer Science");

        when(departmentRepository.findById(1L)).thenReturn(Optional.of(department));

        Department fetchedDepartment = departmentRepository.findById(1L).orElse(null);

        assertThat(fetchedDepartment).isNotNull();
        assertThat(fetchedDepartment.getName()).isEqualTo("Computer Science");
    }
}
