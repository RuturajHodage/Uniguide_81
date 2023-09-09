package com.uniguide.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uniguide.beans.College;
import com.uniguide.beans.CollegeRanking;
import com.uniguide.service.CollegeService;

@RequestMapping("/college")
@RestController
@CrossOrigin
public class CollegeController {
	@Autowired
	private CollegeService collegeService;
	
	@GetMapping("/")
	public ResponseEntity<List<College>> getAll(){
		System.out.println("inside getAll");
		List<College>ulist=collegeService.getAll();
		if(ulist.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(ulist);
	}
	
	@PostMapping("/")
	public ResponseEntity<String> addUniversity(@RequestBody College c){
		boolean status=collegeService.addUniversity(c);
		if(status)
			return ResponseEntity.ok("College added successfully");
		return ResponseEntity.ok("College not added");
	}
	
	@PutMapping("/")
	public ResponseEntity<String> updateUniversity(@RequestBody College c){
		boolean status=collegeService.update(c);
		if(status)
			return ResponseEntity.ok("College updated successfully");
		
		return ResponseEntity.ok("College not found");
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUniversity(@PathVariable int id){
		boolean status=collegeService.delete(id);
		if(status)
			return ResponseEntity.ok("College deleted succesfully");
		return ResponseEntity.ok("College deleted unsuccesfully");
		
	}
	
	@GetMapping("/search/{col}")
	public ResponseEntity<List<College>> getAll(@PathVariable String col){
		//System.out.println(col);
		//System.out.println("inside search");
		List<College>ulist=collegeService.searchCollege(col);
		System.out.println(ulist);
		if(ulist.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(ulist);
	}
	@GetMapping("/city")
	public ResponseEntity<List<College>> getByCity(){
		List<College>ulist=collegeService.getByCity();
		System.out.println(ulist);
		if(ulist.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(ulist);
	}

	@GetMapping("/rank")
	public ResponseEntity<List<CollegeRanking>> getByRank(){
		List<CollegeRanking>ulist=collegeService.getByRank();
		System.out.println(ulist);
		if(ulist.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(ulist);
	}
}
