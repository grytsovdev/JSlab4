class Fridge {
  constructor(brand, model, color, price) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
  }

  show() {
    let html = "";
    html += "<tr>";
    html += "<td>" + this.brand + "</td>";
    html += "<td>" + this.model + "</td>";
    html += "<td>" + this.color + "</td>";
    html += "<td>" + this.price + "</td>";
    html += "</tr>";
    return html;
  }
}

var fridges = [
  new Fridge("samsung", "s-23", "red", 300),
  new Fridge("lg", "smart cool", "white", 500),
  new Fridge("Boch", "big cold", "blue", 200),
  new Fridge("samsung", "galaxy freeze", "purple", 100),
  new Fridge("lg", "G5YT3J", "black", 1500),
];

function fridgeShow() {
  var n = document.getElementById("qq").value;
  console.log(n);
  if (n <= 0 || n > fridges.length) n = fridges.length;

  var html = "<table class='fridge-table'>";
  html +=
    "<tr class = 'fridge-table-th'><td>brand</td><td>model</td><td>color</td><td>price</td></tr>";

  for (i = 0; i < n; i++) {
    html += fridges[i].show();
  }
  html += "</table>";
  document.getElementById("myTable").innerHTML = html;
}
