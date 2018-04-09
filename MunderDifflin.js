function signUp() {
  var UName, pWord, eAddress;
  var text = "Congratulations! You have successfully created an account!";
  UName = document.getElementById('UserName1').value;
  pWord = document.getElementById('PassWord').value;
  eAddress = document.getElementById('Email').value;

  alert(text + 'Username: ' + UName  + 'Password: ' + pWord  + "E-Mail Address: " + eAddress);
};

function Searching(){
  var responseQ = prompt('Hello, what item are you looking for? ');
  alert("Unfortunately we don't have " + responseQ + " yet. But we are still adding plenty of items! Check back soon");
};

function QuantityAdd() {
  var quantity1 = document.getElementById('img1Q').value;
  document.getElementById("img1Add").innerHTML = quantity1 + "x added to cart";
}

function QuantityAdd2() {
  var quantity2 = document.getElementById("img2Q").value;
  document.getElementById("img2Add").innerHTML = quantity2 + "x added to cart";
}

function QuantityAdd3() {
  var quantity3 = document.getElementById("img3Q").value;
  document.getElementById("img3Add").innerHTML = quantity3 + "x added to cart";
}

function QuantityAdd4() {
var quantity4 = document.getElementById("img4Q").value;
document.getElementById("img4Add").innerHTML = quantity4 + "x added to cart";
}
