var botao_soma = document.querySelector('input#soma')
botao_soma.addEventListener('click',somar)
function somar(){
    var num1 = document.querySelector('input#num1')
    var num2 = document.querySelector('input#num2')
    var res = document.querySelector('p#res')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var soma = n1+n2
    res.innerHTML = ` = ${soma}`
}

var botao_sub = document.querySelector('input#sub')
botao_sub.addEventListener('click',subtrair)
function subtrair(){
    var num1 = document.querySelector('input#num1')
    var num2 = document.querySelector('input#num2')
    var res = document.querySelector('p#res')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var subtracao = n1-n2
    res.innerHTML = ` = ${subtracao}`
}

var botao_mult = document.querySelector('input#mult')
botao_mult.addEventListener('click',multiplicar)
function multiplicar(){
    var num1 = document.querySelector('input#num1')
    var num2 = document.querySelector('input#num2')
    var res = document.querySelector('p#res')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var multiplicacao = n1*n2
    res.innerHTML = ` = ${multiplicacao}`
}

var botao_divisao = document.querySelector('input#divisao')
botao_divisao.addEventListener('click',dividir)
function dividir(){
    var num1 = document.querySelector('input#num1')
    var num2 = document.querySelector('input#num2')
    var res = document.querySelector('p#res')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var divisao = n1/n2
    res.innerHTML = ` = ${divisao}`
}