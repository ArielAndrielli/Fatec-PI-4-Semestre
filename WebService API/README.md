# WebService Sistema de Agendamento de Salas

<h2>Para todos os exemplos abaixo considere o ambiente de execução como http://localhost:8080</h2>

<p>O serviço de Agendamento construído com Java+Spring Boot possui os seguintes endpoints</p>
<ul>
<li>"/users" -> Recupera todos os registros de clientes da base de dados com suas respectivas informações</li>
<li>"/users/{id}" -> Recupera o registro do usuário de id informado como PathVariable na url. trazendo suas respectivas informações</li>
<li>"/salas" -> Recupera todos os regisrtros de salas da base de dados com suas respectivas informações</li>
<li>"/salas{id}" -> Recupera o registro da sala de id informado como PathVariable na url. trazendo suas respectivas informações</li>
<li>"/agendamentos" -> Recupera todos os registros de agendamentos trazendo a informação da sala e usuário vinculados assim como o ínico e fim do agendamento</li>
<li>"/agendamentos/{id}" -> Recupera o registro do agendamento de id informado como PathVariable na url. trazendo suas respectivas informações </li>
<li>"/agendamentos?salaID={id}&userID={id}" -> Recupera os registros de agendamento do usuário informado vinculado a sala informada</li>
</ul>