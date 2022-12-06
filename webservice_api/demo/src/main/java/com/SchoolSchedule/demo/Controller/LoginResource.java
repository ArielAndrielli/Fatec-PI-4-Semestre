package com.SchoolSchedule.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SchoolSchedule.demo.entities.User;
import com.SchoolSchedule.demo.entities.Util.UserDTO;
import com.SchoolSchedule.demo.repository.UserCustomRepository;

@RestController
@RequestMapping("/login")
public class LoginResource {
	
	@Autowired
	private UserCustomRepository repository;
	
	@PostMapping
	public ResponseEntity<User> verificaCadastro(@RequestBody UserDTO userDTO){
		User user = repository.validaUser(userDTO);
		if(user!=null)
			return ResponseEntity.ok().body(user);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		
	}
	
}
