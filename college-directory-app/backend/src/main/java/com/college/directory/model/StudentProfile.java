package com.college.directory.model;

import javax.persistence.*;

@Entity
public class StudentProfile {
    @Id
    private Long userId;
    private String photo;
    private String year;
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;
    // Getters and setters

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}