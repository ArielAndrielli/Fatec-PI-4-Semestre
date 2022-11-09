package com.SchoolSchedule.demo.Config;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.SchoolSchedule.demo.entities.Agendamento;
import com.SchoolSchedule.demo.entities.Sala;
import com.SchoolSchedule.demo.entities.User;
import com.SchoolSchedule.demo.repository.AgendamentoRepository;
import com.SchoolSchedule.demo.repository.SalaRepository;
import com.SchoolSchedule.demo.repository.UserRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner{
	@Autowired
	private UserRepository userRepository;
	@Autowired 
	private SalaRepository salaRepository;
	@Autowired
	private AgendamentoRepository agendamentoRepository;
	

	@Override
	public void run(String... args) throws Exception {
		User user = new User(null,"Vitor Henrique Dos Santos","Professor",258963,"vitorsantos.info@gmail.com","123456",new Date());
		userRepository.save(user);
		
		Sala sala = new Sala(null,'A',16,1,"Sala de aula grande com tv,projetor e lousa digital",true);
		salaRepository.save(sala);
		
		Agendamento agendamento = new Agendamento(null, sala, user, new Date(),new Date());
		agendamentoRepository.save(agendamento);
		
		
	}
	
	
}
