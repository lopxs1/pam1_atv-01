function mudarCor(novaCor) 
{
    var elemento = document.getElementById("1");
    elemento.style.backgroundColor = novaCor;
}
function getAllParaElems() 
{
    const allParas = document.getElementsByTagName("p");
    const num = allParas.length;
    alert(`Neste documento tem ${num} parágrafo(s)`);
}
function classname()
{
    const x = document.getElementsByClassName("teste1");
    document.getElementById("mostrar").innerHTML = 'O primeiro parágrafo com a class="teste" é: ' + x[0].innerHTML;
}
function selectorall()
{
    const x = document.querySelectorAll("p.teste2");
    document.getElementById("mostrar1").innerHTML = 'O primeiro parágrafo com a class="teste" é: ' + x[0].innerHTML;
}
function selector()
{
    document.querySelector(".testes").style.backgroundColor = "yellow";
}
