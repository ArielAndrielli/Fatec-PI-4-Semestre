package com.SchoolSchedule.demo.Controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.SchoolSchedule.demo.entities.Sala;
import com.SchoolSchedule.demo.services.SalaService;

@RestController
@RequestMapping(value = "/salas")
public class SalaResource {
	@Autowired
	private SalaService salaService;
	
	@GetMapping
	public ResponseEntity<List<Sala>> findAll(){
		List<Sala> salas = salaService.findAll();
		return ResponseEntity.ok().body(salas);
	}
	
	@GetMapping(value="/{id}")
	public ResponseEntity<Sala> findById(@PathVariable Long id){
		Sala obj = salaService.findById(id);
		return ResponseEntity.ok().body(obj); 
	}
	
	@PostMapping
	public ResponseEntity<Sala> insert(@RequestBody Sala obj){
		obj = salaService.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).body(obj);
	}
	
	@DeleteMapping(value="/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		salaService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<Sala> update(@PathVariable Long id,@RequestBody Sala obj){
		obj = salaService.update(id, obj);
		return ResponseEntity.ok().body(obj);
	}
	
}
