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

import com.uniguide.beans.StudentLogin;
import com.uniguide.beans.University;
import com.uniguide.beans.UserLogin;
import com.uniguide.service.StudentLoginService;
import com.uniguide.service.UserLoginService;
@RequestMapping("/student")
@RestController
@CrossOrigin
public class StudentLoginController {
	
	
	@Autowired
	private StudentLoginService studentloginservice;
	
	@GetMapping("/")
	public ResponseEntity<List<StudentLogin>> getAll(){
		System.out.println("inside getAll");
		List<StudentLogin>ulist=studentloginservice.getAll();
		if(ulist.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(ulist);
	}
	
	@PostMapping("/")
	public ResponseEntity<?> addStudent( @RequestBody StudentLogin sl) {
		studentloginservice.addstudent(sl);
		  return ResponseEntity.ok("success");
	}
	
	@PutMapping("/")
	public ResponseEntity<String> updateStudent(@RequestBody StudentLogin sl){
		boolean status=studentloginservice.update(sl);
		if(status)
			return ResponseEntity.ok("Student updated successfully");
		
		return ResponseEntity.ok("Student not found");
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable int id){
		boolean status=studentloginservice.delete(id);
		if(status)
			return ResponseEntity.ok("Student deleted succesfully");
		return ResponseEntity.ok("Student deleted unsuccesfully");
		
	}
	
	
	
	
	
	
	
	
	
	

}
