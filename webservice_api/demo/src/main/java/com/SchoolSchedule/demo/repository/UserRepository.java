package com.SchoolSchedule.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.SchoolSchedule.demo.entities.User;

public interface UserRepository extends JpaRepository<User,Long>{
	

}
