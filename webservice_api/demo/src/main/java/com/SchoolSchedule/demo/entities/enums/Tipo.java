package com.SchoolSchedule.demo.entities.enums;

public enum Tipo {
	SALA_DE_AULA(1),
	LABORATORIO(2),
	ESPACO_RECREATIVO(3),
	PARQUE(4),
	QUADRA(5);
	
	private int codigo;

	private Tipo(int codigo) {
		this.codigo = codigo;
	}
	
	public int getCodigo() {
		return codigo;
	}
	public static Tipo valueOf(int codigo) {
		for(Tipo tipo: Tipo.values()) {
			if(tipo.getCodigo()==codigo)
				return tipo;
		}
		throw new IllegalArgumentException("Tipo não definido");
	}
	
	
	
}
