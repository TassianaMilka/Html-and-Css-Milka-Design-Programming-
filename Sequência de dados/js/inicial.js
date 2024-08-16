
/*Declaração das váriaveis.*/
var string="Emfraim"; 

/*Imprimir o nome da string*/
document.write("O nome \n"+string);

/*Declaração das váriaveis de array do nome.*/
var nomes = new Array("Emfraim"); 
/*Laço de repetição de i até nome.length.*/
for(var i=0; i < nomes.length;i++) 
{ 
    /*Declaração das váriaveis*/
 var nome = nomes[i] 
 /* Validação de dado se o nome começa com a letra E.*/
 if(nome.charAt(0) == "E") 
    /*Um enunciado da página*/

 alert("O nome " + nome + " começa com a letra E"); 
}


