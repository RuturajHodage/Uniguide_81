package com.uniguide.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.uniguide.beans.College;
@Repository
public interface CollegeDao extends JpaRepository<College, Integer> {
	
	@Query(value="select * from college  where clg_name like %:col% or clg_city like %:col% or clg_address like %:col% or clg_state like %:col%",nativeQuery = true)
	List<College> searchCollege(String col);

	@Query(value="select * from college order by clg_city",nativeQuery = true)
	
	List<College> getByCity();

}
