package com.college.directory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.directory.model.AdministratorProfile;

public interface AdministratorProfileRepository extends JpaRepository<AdministratorProfile, Long> {
}
