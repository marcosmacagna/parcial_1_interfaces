var icono = document.querySelector(".icono-menu");
var enlaces = document.querySelector(".enlaces-menu");
var header = document.querySelector("header");

/* MENU */

icono.addEventListener("click", function() {
	enlaces.classList.toggle("activado");
})

window.addEventListener("scroll", function() {
	header.classList.toggle("abajo", window.scrollY > 0);
})

/* MAIN INDEX */

window.onscroll = function(){miFuncion()};

var metaverso1 = document.getElementById("metaverso1");
var metaverso2 = document.getElementById("metaverso2");
var metaverso3 = document.getElementById("metaverso3");
var metaverso4 = document.getElementById("metaverso4");

var distancia_metaverso1, distancia_metaverso2, distancia_metaverso3, distancia_metaverso4;

function miFuncion() {
	distancia_metaverso1 = window.innerHeight - metaverso1.getBoundingClientRect().top;
	if(distancia_metaverso1 >= 200) {
		metaverso1.classList.add("efecto-metaverso1");
	}

	distancia_metaverso2 = window.innerHeight - metaverso2.getBoundingClientRect().top;
	if(distancia_metaverso2 >= 200) {
		metaverso2.classList.add("efecto-metaverso2");
	}

	distancia_metaverso3 = window.innerHeight - metaverso3.getBoundingClientRect().top;
	if(distancia_metaverso3 >= 200) {
		metaverso3.classList.add("efecto-metaverso3");
	}

	distancia_metaverso4 = window.innerHeight - metaverso4.getBoundingClientRect().top;
	if(distancia_metaverso4 >= 200) {
		metaverso4.classList.add("efecto-metaverso4");
	}

}

/* MODO OSCURO */

var oscuro = document.getElementById("oscuro");
var body = document.body;

oscuro.addEventListener("click", function(){
	var guardar = body.classList.toggle("dark");
	localStorage.setItem("oscuro", guardar)
})

var guardar2 = localStorage.getItem("oscuro");

if (guardar2 == "true") {
	body.classList.add("dark");
} else {
	body.classList.remove("dark");
}