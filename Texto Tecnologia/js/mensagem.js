/*Declarações das váriveis com atribuições*/
var mensagem = "Estudar é momento de determinação!"; 
var texto; 
var ligado = false; 
var timeoutID = null; 
var posicao = 0; 
var tamanho; 
var janela; 
/*Função com atribuições*/
function ligarMarquee(){ 
 if (ligado) pararMarquee(); 
 texto = document.form1.marquee.value + mensagem +
document.form1.marquee.value; 
 tamanho = texto.length; 
 janela = document.form1.marquee.size; 
 atualizarMarquee(); 
 /*É uma atribuição caso seja verdadeiro ou seja ligar*/
 ligado = true; 
} 
/*Função com validação de dado que faz parte do button para ligar*/
function pararMarquee(){ 
 if (ligado) clearTimeout(timeoutID); 
 /*É uma atribuição caso seja falso ou seja desligar*/
 ligado = false; 
} 
/*Função para o tamnho da posição*/
function atualizarMarquee(){ 
 document.form1.marquee.value=texto.substring(posicao++%tamanho, 
posicao+janela%tamanho); 
 timeoutID = setTimeout("atualizarMarquee()", 100); 
} 