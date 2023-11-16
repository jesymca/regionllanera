document.addEventListener("DOMContentLoaded", function() {

	// VARIABLES
	var logos = `<div class="d-flex">
	<div class="logo">
		<img src="img/km-logo.png" alt="logo">
	</div>
	<div class="logo">
		<img src="img/km-logo-pnf.png" alt="logo">
	</div>
</div>`;
	var copyright = '<p>&copy; 2023 | Grupo de Informatica UPTPC</p>';
	var footer = `<div class="footer">
	<div class="row">
		<div class="col-lg-4 col-md-12 order-lg-2"></div>
		<div class="col-lg-8 col-md-12 order-lg-1 social-links">
			<div class="social-links">
				<a target="_blank" href="https://www.jesuministrosymas.com.ve">
					<i class="fas fa-globe"></i> Website Gestion
				</a>
				<!--
				<a target="_blank" href="mailto:jose@jesuministrosymas.com.ve">
					<i class="fa fa-envelope"></i> Email
				</a>
				-->
				<a target="_blank" href="https://www.facebook.com/uptpc/">
					<i class="fab fa-facebook"></i> Facebook
				</a>
				<a target="_blank" href="https://www.instagram.com/uptpc.oficial.es">
					<i class="fab fa-instagram"></i> Instagram
				</a>
				<a target="_blank" href="https://www.tiktok.com/@uptpc.ifucial.es">
				<i class="fab fa-tiktok"></i> TikTok
			</a>
			</div>
		</div>
	</div>
</div>`;
  
	// DECLARACIONES
	document.getElementById('copyright').innerHTML = copyright;
	document.getElementById('footer').innerHTML = footer;
	document.getElementById('logos').innerHTML = logos;
  });

function changeButton(selected, e) {
	var oldActive = document.getElementsByClassName("active");
	for (var i = 0; i < oldActive.length; i++) {
	  oldActive[i].classList.remove("active");
	}
	e.target.classList.add("active");
  
	// Almacenar el índice del enlace activo en el almacenamiento local
	localStorage.setItem('activeLink', selected);
  
	// Redirigir a la URL del enlace clickeado
	window.location.href = e.target.href;
  }
  
  function handleClick() {
	var numberButtons = document.getElementsByClassName("nav-link");
	for (var i = 0; i < numberButtons.length; i++) {
	  numberButtons[i].addEventListener("click", changeButton.bind(null, i));
	}
  }
  
  function barralateral() {
	var barralateral = `<ul class='nav flex-column' id='barralateral'>
						  <li class='nav-item'>
							<a class='nav-link' href='index.html' data-toggle="tab"><i class='fa fa-home'></i> Home</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='comercio.html' data-toggle="tab"><i class='fa fa-cash-register'></i> Comercio</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='cultura.html' data-toggle="tab"><i class='fa fa-hat-cowboy'></i> Cultura</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='tecnologia.html' data-toggle="tab"><i class='fa fa-address-card'></i> Tecnologia</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='agropecuaria.html' data-toggle="tab"><i class='fa fa-tractor'></i> Agropecuaria</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='creadores.html' data-toggle="tab"><i class='fa fa-users'></i> Creadores</a>
						  </li>
						  </ul>`;
  
	document.getElementById('barralateral').innerHTML = barralateral;
  
	// Recuperar el índice del enlace activo del almacenamiento local
	var activeLink = localStorage.getItem('activeLink');
  
	// Si hay un enlace activo almacenado, agregar la clase activa a ese enlace
	if (activeLink !== null) {
	  document.getElementsByClassName('nav-link')[activeLink].classList.add('active');
	}
  
	// Llamar a handleClick después de que se haya cargado la barra lateral
	handleClick();
  }
  
  barralateral();