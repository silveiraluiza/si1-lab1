//package modelo;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.Id;
//
//import org.hibernate.validator.constraints.NotEmpty;
//
//@Entity
//public class Endereco {
//	
//	@Id @GeneratedValue
//	private long id;
//	@NotEmpty
//	private String logradouro;
//	@NotEmpty
//	private String numero;
//	@NotEmpty
//	private String bairro;
//	@NotEmpty
//	private String cidade;
//	@NotEmpty
//	private String estado;
//	@NotEmpty
//	private String cep;
//	
//	public Endereco(){}
//	
//	public String getLogradouro() {
//		return logradouro;
//	}
//	public void setLogradouro(String logradouro) {
//		this.logradouro = logradouro;
//	}
//	public String getNumero() {
//		return numero;
//	}
//	public void setNumero(String numero) {
//		this.numero = numero;
//	}
//	public String getBairro() {
//		return bairro;
//	}
//	public void setBairro(String bairro) {
//		this.bairro = bairro;
//	}
//	public String getCidade() {
//		return cidade;
//	}
//	public void setCidade(String cidade) {
//		this.cidade = cidade;
//	}
//	public String getEstado() {
//		return estado;
//	}
//	public void setEstado(String estado) {
//		this.estado = estado;
//	}
//	public String getCep() {
//		return cep;
//	}
//	public void setCep(String cep) {
//		this.cep = cep;
//	}
//}