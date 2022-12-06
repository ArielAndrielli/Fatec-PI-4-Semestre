package com.SchoolSchedule.demo.repository;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;

import org.springframework.stereotype.Repository;

import com.SchoolSchedule.demo.entities.User;
import com.SchoolSchedule.demo.entities.Util.UserDTO;

@Repository
public class UserCustomRepository {
	private EntityManager em;
	
	public UserCustomRepository(EntityManager em) {
		this.em = em;
	}
	
	public User validaUser(UserDTO userDTO) {
		try {
		if(userDTO.getUserName().isEmpty() || userDTO.getPassword().isEmpty())
			throw new NoResultException();
		User u = em.createQuery("SELECT U FROM User U WHERE U.email = :email AND U.senha= :senha",User.class)
				.setParameter("email", userDTO.getUserName())
				.setParameter("senha", userDTO.getPassword())
				.getSingleResult();
		return u;
		}catch(NoResultException e) {
			return null;
		}
	}
}
