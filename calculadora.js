let numero1 = document.querySelector('input#n1')
numero1.addEventListener('click',add1)

function add1(){
    let caixa = document.querySelector('p#res')
    let num = Number(caixa.value)
    res.innerHTML += `${num}`
    alert(`${caixa}`)
}
