
/*Realizando uma função de string.*/
function dado(nome) 
{ 
/*Declaração das váriaveis.*/
 var d = new Date(); 
 /*Imprimir a data e horas.*/
 document.write(" " + nome + "<br/>A data e horas atuais são: " 
 + d.toLocaleString()); 
} 
dado(''); /* Imprimir o dado.*/