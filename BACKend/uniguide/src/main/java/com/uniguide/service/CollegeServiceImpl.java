package com.uniguide.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniguide.beans.College;
import com.uniguide.beans.CollegeRanking;
import com.uniguide.beans.University;
import com.uniguide.dao.BranchDao;
import com.uniguide.dao.CollegeDao;
import com.uniguide.dao.CollegeRankingDao;
import com.uniguide.dao.IntakeVacancyDao;
import com.uniguide.dao.StreamDao;
import com.uniguide.dao.UniversityDao;

@Service
public class CollegeServiceImpl implements CollegeService {
	@Autowired
	private CollegeDao collegeDao;
	@Autowired
	private CollegeRankingDao collegeRankingDao;

	@Override
	public List<College> getAll() {
		List<College> ulist = collegeDao.findAll();
		if (ulist.isEmpty()) {
			return null;
		}
		return ulist;
	}

	@Override
	public boolean addUniversity(College c) {
		College uni = collegeDao.save(c);
		if (uni != null)
			return true;
		return false;
	}

	@Override
	public boolean update(College c) {
		College clg = collegeDao.getById(c.getClgId());
		if (clg != null) {
			
			clg.setClgId(c.getClgId());
			clg.setClgAddress(c.getClgAddress());
			clg.setClgCity(c.getClgCity());
			clg.setClgDescription(c.getClgDescription());
			clg.setClgImg(c.getClgImg());
			clg.setClgName(c.getClgName());
			clg.setClgState(c.getClgState());
			clg.setClgWebsite(c.getClgWebsite());
			clg.setUniId(c.getUniId());
			collegeDao.save(clg);
			return true;
		}
		return false;
	}

	@Override
	public boolean delete(int id) {
		Optional<College> clg = collegeDao.findById(id);

		if (clg.isPresent()) {
			College univ = clg.get();
			collegeDao.delete(univ);
			return true;
		}
		return false;
	}

	@Override
	public List<College> searchCollege(String col) {
		List<College> clist=collegeDao.searchCollege(col);
		return clist;
	}

	@Override
	public List<College> getByCity() {
		List<College> clist=collegeDao.getByCity();
		return clist;
	}

	@Override
	public List<CollegeRanking> getByRank() {
		List<CollegeRanking> clist= collegeRankingDao.getByRank();
		return clist;
	}

}
