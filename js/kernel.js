document.addEventListener("DOMContentLoaded", function() {


var pagina = window.location.pathname;
var nombrePagina = pagina.substring(pagina.lastIndexOf('/') + 1);

//var miVariable;

if(nombrePagina == 'index.html') {
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
var botones = `<!-- Start Main Services Area -->
<section class="main-services-area" style="margin-top: 35px; padding-bottom: 20px !important;">
	<div class="container">
		<div class="row">
				
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="main-services-box" style="border: 1px solid #ededed;border-radius: 4px; height: 168px;">
				   
					<h3><i class="icon fas fa-cash-register"></i>  <a href="pag/comercio.html">Comercio</a></h3>
					<p>Conoce sobre el comercio de la region llanera</p>
				</div>
			</div>
			   
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="main-services-box" style="border: 1px solid #ededed;border-radius: 4px; height: 168px;">
				   
					<h3><i class="icon fa fa-hat-cowboy"></i>  <a href="pag/cultura.html">Cultura</a></h3>
					<p>La esencia de la cultura llanera gira en torno al sentir del llanero y todo lo que se circunscribe a su diario vivir.</p>
				</div>
			</div>
			   
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="main-services-box" style="border: 1px solid #ededed;border-radius: 4px; height: 168px;">
				   
					<h3><i class="icon fas fa-bezier-curve"></i>  <a href="pag/tecnologia.html">Tecnologia</a></h3>
					<p>Informacion sobre la Tecnologia de la region los llanos</p>
				</div>
			</div>
			   
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="main-services-box" style="border: 1px solid #ededed;border-radius: 4px; height: 168px;">
				   
					<h3><i class="icon fas fa-tractor"></i>  <a href="pag/agropecuaria.html">Agropecuaria</a></h3>
					<p>Informacion sobre la agropecuaria de la region los llanos</p>
				</div>
			</div>
			   
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="main-services-box" style="border: 1px solid #ededed;border-radius: 4px; height: 168px;">
				   
					<h3><i class="icon fas fa-users"></i>  <a href="pag/creadores.html">Creadores</a></h3>
					<p>Vea aqui quienes fueron los creadores de este sitio</p>
				</div>
			</div>
			   
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="main-services-box" style="border: 1px solid #ededed;border-radius: 4px; height: 168px;">
				   
					<h3><i class="icon fas fa-address-card"></i>  <a href="sobre.html">Sobre este sitio</a></h3>
					<p>Vea aqui sobre la tecnologia utilizada en el desarrollo de este proyecto</p>
				</div>
			</div>
			 
		</div>
	</div>

</section>
<!-- End Main Services Area -->`;

} else {
// VARIABLES
var logos = `<div class="d-flex">
<div class="logo">
	<img src="../img/km-logo.png" alt="logo">
</div>
<div class="logo">
	<img src="../img/km-logo-pnf.png" alt="logo">
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
}
  
	// DECLARACIONES
	document.getElementById('copyright').innerHTML = copyright;
	document.getElementById('footer').innerHTML = footer;
	document.getElementById('logos').innerHTML = logos;
	document.getElementById('botones').innerHTML = botones;
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
var pagina = window.location.pathname;
var nombrePagina = pagina.substring(pagina.lastIndexOf('/') + 1);

//var miVariable;

if(nombrePagina == 'index.html') {
	var barralateral = `<ul class='nav flex-column' id='barralateral'>
						  <li class='nav-item'>
							<a class='nav-link' href='index.html' data-toggle="tab"><i class='fa fa-home'></i> Home</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='pag/comercio.html' data-toggle="tab"><i class='fa fa-cash-register'></i> Comercio</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='pag/cultura.html' data-toggle="tab"><i class='fa fa-hat-cowboy'></i> Cultura</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='pag/tecnologia.html' data-toggle="tab"><i class='fa fa-bezier-curve'></i> Tecnologia</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='pag/agropecuaria.html' data-toggle="tab"><i class='fa fa-tractor'></i> Agropecuaria</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='pag/creadores.html' data-toggle="tab"><i class='fa fa-users'></i> Creadores</a>
						  </li>
						  <li class='nav-item'>
						  <a class='nav-link' href='pag/sobre.html' data-toggle="tab"><i class='fa fa-address-card'></i> Sobre el Sitio</a>
						</li>
						  </ul>`;
} else {
	var barralateral = `<ul class='nav flex-column' id='barralateral'>
						  <li class='nav-item'>
							<a class='nav-link' href='../index.html' data-toggle="tab"><i class='fa fa-home'></i> Home</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='comercio.html' data-toggle="tab"><i class='fa fa-cash-register'></i> Comercio</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='cultura.html' data-toggle="tab"><i class='fa fa-hat-cowboy'></i> Cultura</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='tecnologia.html' data-toggle="tab"><i class='fa fa-bezier-curve'></i> Tecnologia</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='agropecuaria.html' data-toggle="tab"><i class='fa fa-tractor'></i> Agropecuaria</a>
						  </li>
						  <li class='nav-item'>
							<a class='nav-link' href='creadores.html' data-toggle="tab"><i class='fa fa-users'></i> Creadores</a>
						  </li>
						  <li class='nav-item'>
						  <a class='nav-link' href='sobre.html' data-toggle="tab"><i class='fa fa-address-card'></i> Sobre el Sitio</a>
						</li>
						  </ul>`;

}
	
  
	document.getElementById('barralateral').innerHTML = barralateral;
  
	// Recuperar el índice del enlace activo del almacenamiento local
	var activeLink = localStorage.getItem('activeLink');
  
	// Si hay un enlace activo almacenado, agregar la clase activa a ese enlace
	if (activeLink !== null) {
	  document.getElementsByClassName('nav-link')[activeLink].classList.add('active');
	}
  
	// Llamar a handleClick después de que se haya cargado la barra lateral
	handleClick();

// Obtener la ruta de la página actual
var currentPath = window.location.pathname;

// Extraer solo el nombre del archivo de la ruta
var currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

// Obtener todos los enlaces de la barra lateral
var navLinks = document.getElementsByClassName('nav-link');

// Recorrer todos los enlaces y eliminar la clase 'active'
for (var i = 0; i < navLinks.length; i++) {
	navLinks[i].classList.remove('active');
}

// Recorrer todos los enlaces
for (var i = 0; i < navLinks.length; i++) {
	// Si el enlace coincide con la página actual, agregar la clase 'active'
	if (navLinks[i].getAttribute('href') === currentPage) {
		navLinks[i].classList.add('active');
	}
}
}
  
barralateral();