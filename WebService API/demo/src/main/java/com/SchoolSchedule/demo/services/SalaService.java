package com.SchoolSchedule.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SchoolSchedule.demo.entities.Sala;
import com.SchoolSchedule.demo.repository.SalaRepository;

@Service
public class SalaService {
	@Autowired
	private  SalaRepository salaRepository;
	
	public List<Sala> findAll(){
		return salaRepository.findAll();
	}
	
	public Sala findById(Long id) {
		Optional<Sala> op =  salaRepository.findById(id);
		return op.get();
	}
	
	public Sala insert(Sala sala) {
		return salaRepository.save(sala);
	}
	
	public void delete(Long id) {
		salaRepository.deleteById(id);
	}
	
	public Sala update(Long id,Sala obj) {
		Sala entity = salaRepository.getReferenceById(id);
		updateData(entity,obj);
		return salaRepository.save(entity);
	}
	
	public void updateData(Sala entity,Sala obj) {
		entity.setBloco(obj.getBloco());
		entity.setAtivo(obj.getAtivo());
		entity.setDescricao(obj.getDescricao());
		entity.setNumero(obj.getNumero());
		entity.setTipo(obj.getTipo());
	}
}
