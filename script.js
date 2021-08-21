// JavaScript Document

/*
		function acender() {
			document.getElementById("luz").src = "acesa.jpg";
		}
		function apagar() {
			document.getElementById("luz").src = "apagada.jpg";
		}
		function quebrar() {
			document.getElementById("luz").src = "quebrada.jpg";
		}
*/	
		// ------------------------------

		var quebrada = false;

		// -----------------------
		window.onload = function() {
		// -----------------------
			document.getElementById("estoque").value = "3";
		}

		function rel() {
			window.location.reload();
			document.getElementById("rel").style.display = "block";
		}

		function mudaLampada(tipo) {
			if (tipo ==  1 & !quebrada) {
				arquivo = "acesa.png";
				document.body.style.backgroundColor = "#FFF";
				document.getElementById("tit").style.color = "#000";
			}
			if (tipo ==  2 & !quebrada) {
				arquivo = "apagada.png";
				document.body.style.backgroundColor = "#FFF";
				document.getElementById("tit").style.color = "#AAA";
			}
			if (tipo ==  3) {
				arquivo = "quebrada.png";
				document.body.style.backgroundColor = "#444";
			}
			if (tipo == 4) {
				quebrada = false;
				arquivo = "apagada.png";
				
				var f = document.getElementById("escuro");
				var x = document.getElementById("estoque");
				var s = document.getElementById("socket");
				document.body.style.backgroundColor = "#999";

				if (x.value <= 0) {
					alert("O Estoque de lampadas novas esgotou!");
					f.style.backgroundColor= "#000";
					s.style.display = "none";
					document.getElementById("restart").style.display="block";
					quebrada = true;
				} else {
					x.value = x.value - 1;
					document.getElementById("lamp-0"+x.value).style.display = "none";
				}

			}
			if (!quebrada) {
				document.getElementById("luz").src = arquivo;
				if (tipo == 3) {
					quebrada = true;
				}
			}
		}
