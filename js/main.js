/**************************************** CARRINHO DE COMPRAS **********************************/

function AddCarrinho(produto, qtd, valor, posicao) {
  localStorage.clear();
  localStorage.setItem("produto" + posicao, produto);
  localStorage.setItem("qtd" + posicao, qtd);
  valor = valor * qtd;
  localStorage.setItem("valor" + posicao, valor);
  alert("Produto adicionado ao carrinho!");
  window.location.href = "cart.html";
}

var total = 0;
var i = 0;
var valor = 0;

for (i = 1; i <= 99; i++) {
  var prod = localStorage.getItem("produto" + i + "");
  if (prod != null) {
    document.getElementById("qntd_cart").innerHTML +=
      localStorage.getItem("qtd" + i) + "x ";
    document.getElementById("title_cart").innerHTML += localStorage.getItem(
      "produto" + i
    );
    document.getElementById("qntd_cart").innerHTML += " ";
    valor = parseFloat(localStorage.getItem("valor" + i));
    document.getElementById("prc").innerHTML += "R$: " + valor.toFixed(2);

    total = total + valor;
  }
}

document.getElementById("total").innerHTML = total.toFixed(2);

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
