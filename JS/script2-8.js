var n1, n2;
function btAd()
{
    n1 = window.document.getElementById("n1").value;
    n2 = window.document.getElementById("n2").value;
    var soma = parseInt(n1) + parseInt(n2);
    window.alert(soma)
}
function btSb()
{
    n1 = window.document.getElementById("n1").value;
    n2 = window.document.getElementById("n2").value;
    var s = parseInt(n1) - parseInt(n2);
    window.alert(s)
}
function btDv()
{
    n1 = window.document.getElementById("n1").value;
    n2 = window.document.getElementById("n2").value;
    var d = parseInt(n1) / parseInt(n2);
    window.alert(d)
}
function btMt()
{
    n1 = window.document.getElementById("n1").value;
    n2 = window.document.getElementById("n2").value;
    var m = parseInt(n1) * parseInt(n2);
    window.alert(m)
}