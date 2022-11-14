package com.SchoolSchedule.demo.Controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.SchoolSchedule.demo.entities.Agendamento;
import com.SchoolSchedule.demo.entities.Util.InserirAgendamento;
import com.SchoolSchedule.demo.repository.AgendamentoCustomRepository;
import com.SchoolSchedule.demo.services.AgendamentoService;

@RestController
@RequestMapping(value="/agendamentos")
public class AgendamentoResource {
	@Autowired
	private AgendamentoService agendamentoService;
	@Autowired
	private AgendamentoCustomRepository agendamentoCustomRepository;
	
	@GetMapping
	public ResponseEntity<List<Agendamento>> findAll(){
		List<Agendamento> agendamentos = agendamentoService.findAll();
		return ResponseEntity.ok().body(agendamentos);
	}
	

	@GetMapping(value="/{id}")
	public ResponseEntity<Agendamento> findById(@PathVariable Long id){
		Agendamento agendamento = agendamentoService.findById(id);
		return ResponseEntity.ok().body(agendamento);
	}
	
	@PostMapping
	public ResponseEntity<Agendamento> insert(@RequestBody InserirAgendamento inserirAgendamento){
		Agendamento agendamento = agendamentoService.insert(inserirAgendamento);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(agendamento.getId()).toUri();
		return ResponseEntity.created(uri).body(agendamento);
	}
	
	public ResponseEntity<List<Agendamento>> findByUserAndClass(@RequestParam("salaID")Long salaID,@RequestParam("userID")Long userID){
		List<Agendamento> agendamentos = agendamentoCustomRepository.findByUserAndClass(userID, salaID);
		return ResponseEntity.ok().body(agendamentos);
	}
	
}
