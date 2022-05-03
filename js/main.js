$("#btnAdd").hide();
$("#logout").hide();
$(".deletaProduto").hide();

if (document.getElementById("admin").value == "true") {
  $("#btnAdd").show();
  $("#logout").show();
  $("#login").hide();
  $(".deletaProduto").show();
}

function limpaCarrinho() {
  document.getElementById("title_cart").innerHTML = "";
  document.getElementById("qntd_cart").innerHTML = "";
  document.getElementById("prc").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  localStorage.clear();
}

/**************************************** CARRINHO DE COMPRAS **********************************/

function login() {
  if (
    document.getElementById("usuario").value == "" ||
    document.getElementById("senha").value == ""
  ) {
    alert("Dados Inválidos");
    return;
  } else {
    alert("Login realizado com sucesso!");
    return (window.location.href = "index.html");
  }
}

function Cadastro() {
  if (
    document.getElementById("usuario").value == "" ||
    document.getElementById("senha").value == "" ||
    document.getElementById("Csenha").value == "" ||
    document.getElementById("senha").value !=
      document.getElementById("Csenha").value
  ) {
    alert("Dados Inválidos");
    return;
  } else {
    alert("Login realizado com sucesso!");
    return (window.location.href = "user.html");
  }
}

function pedido() {
  if (
    document.getElementById("total").innerHTML == "" ||
    document.getElementById("total").innerHTML == 0
  ) {
    alert("Nenhum item no Carrinho!");
  } else {
    alert("Pedido realizado com sucesso!");
    window.location.href = "index.html";
    limpaCarrinho();
  }
}
