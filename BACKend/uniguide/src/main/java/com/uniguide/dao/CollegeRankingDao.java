package com.uniguide.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.uniguide.beans.CollegeRanking;

@Repository
public interface CollegeRankingDao extends JpaRepository<CollegeRanking, Integer>{
	@Query(value="select * from college_ranking order by nirf_rank",nativeQuery = true)
	List<CollegeRanking> getByRank();

}
