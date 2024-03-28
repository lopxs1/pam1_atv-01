function acima()
{
    document.getElementById("1").innerHTML = 'não clique';
}
function foco(x)
{
    x.style.background="gray";
}
function escolha() {
    var x = document.getElementById("escolhida").value;
    document.getElementById("mostrar").innerHTML = "Você selecionou: " + x;
}