package com.SchoolSchedule.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SchoolSchedule.demo.entities.Sala;

public interface SalaRepository extends JpaRepository<Sala,Long>{
	
}
