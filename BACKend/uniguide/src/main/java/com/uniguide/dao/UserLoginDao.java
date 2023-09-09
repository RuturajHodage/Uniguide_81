package com.uniguide.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.uniguide.beans.UserLogin;
@Repository
public interface UserLoginDao extends JpaRepository<UserLogin, Integer> {
	@Query(value="select * from user_login where email_id=:emailId and password=:password",nativeQuery = true)
	UserLogin getByUsername(String emailId, String password);
	
	
	@Query(value="select * from user_login where email_Id=:emailId",nativeQuery=true)
	UserLogin getByEmail(String emailId);
	
	@Query(value="select * from user_login where email_id=:emailId and user_name=:userName",nativeQuery=true)
	UserLogin updateUser(String emailId, String userName);
	
//	@Query(value="select email_id from user_login where email_id=:emailId ",nativeQuery = true)
//    UserLogin getByEmailId(); 	
	

}
