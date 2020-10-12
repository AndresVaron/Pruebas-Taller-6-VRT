function randomPalette() {
  let val = 360 / 5;
  let random = Math.floor(Math.random() * 361);
  let colores = Array(5);
  for (var i = 1; i <= colores.length; i++) {
    colores[i - 1] = hsvToRgb(((random * i) % 360) / 360, 1, 1);
  }
  for (var i = 1; i <= colores.length; i++) {
    document.getElementById("color" + i).style.backgroundColor =
      "rgb(" + colores[i - 1].join(",") + ")";
  }
  document.getElementById("css-rules").innerHTML = ` 
.website-background{ color: ${"rgb(" + colores[0].join(",") + ")"};}

.element-text{ color: ${"rgb(" + colores[1].join(",") + ")"};}

.element-border{ border-color: ${"rgb(" + colores[2].join(",") + ")"};}

.element-background{ background-color: ${"rgb(" + colores[3].join(",") + ")"};}

.header{ color: ${"rgb(" + colores[4].join(",") + ")"};}
            `;
}

function generateRules() { }

function limpiarPalette() {
  document.getElementById("css-rules").innerHTML = ` 
.website-background{ color: #FFFFFF;}

.element-text{ color: #FFFFFF;}

.element-border{ border-color: #FFFFFF;}

.element-background{ background-color: #FFFFFF;}

.header{ color: #FFFFFF;}
            `;
  document.getElementById("color1").style.backgroundColor = "#FFFFFF";
  document.getElementById("color2").style.backgroundColor = "#FFFFFF";
  document.getElementById("color3").style.backgroundColor = "#FFFFFF";
  document.getElementById("color4").style.backgroundColor = "#FFFFFF";
  document.getElementById("color5").style.backgroundColor = "#FFFFFF";
}
