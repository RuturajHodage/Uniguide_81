package com.uniguide.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniguide.beans.University;
import com.uniguide.beans.UserLogin;
import com.uniguide.dao.UserLoginDao;

@Service
public class UserLoginServiceImpl implements UserLoginService{
    
	@Autowired
	private UserLoginDao userlogindao;

	@Override
	public UserLogin addUser(UserLogin ul) {
		System.out.println(ul.getEmailId());
		UserLogin us=userlogindao.getByEmail(ul.getEmailId());
		if(us==null) {	
		userlogindao.save(ul);
		return ul;
		}
		return null;
		
	}

	@Override
	public UserLogin validate(UserLogin u) {
		return userlogindao.getByUsername(u.getEmailId(),u.getPassword());
		
	}
	
	@Override
	public List<UserLogin> getAll() {
		List<UserLogin> ulist=userlogindao.findAll();
		if(ulist.isEmpty()) {
			return null;
		}
		return ulist;
	}
	
	

	@Override
	public boolean update(UserLogin ul) {
		
		UserLogin ulog=userlogindao.updateUser(ul.getEmailId(),ul.getUserName());
		if(ulog!=null) {
			ulog.setPassword(ul.getPassword());
			userlogindao.save(ulog);
			return true;
		}
		return false;
	}

	@Override
	public boolean delete(int id) {
		Optional<UserLogin> ul=userlogindao.findById(id);
		if(ul.isPresent()) {
			UserLogin u=ul.get();
		userlogindao.delete(u);
		return true;
	}
		return false;
	}

	
	
	

	
	
	
	
	

	
	

}
