function handleClick(e) {
  e.preventDefault(); // Evitar la acción predeterminada del enlace
  e.stopPropagation(); // Evitar que el evento se propague al elemento padre

  // Remover clase "active" de todos los links dentro de barralateral
  var links = document.querySelectorAll('#barralateral .nav-link');
  links.forEach(link => {
    link.classList.remove('active');
  });

  // Agregar clase "active" al link clickeado
  e.target.classList.add('active');

  // Redirigir a la URL del enlace clickeado
  window.location.href = e.target.href;
}

function barralateral() {
  var barralateral = `<ul class='nav flex-column' id='barralateral'>
                        <li class='nav-item'>
                          <a class='nav-link active' href='index.html' data-toggle="tab" onclick="handleClick(event)"><i class='fa fa-home'></i> Home</a>
                        </li>
                        <li class='nav-item'>
                          <a class='nav-link' href='comercio.html' data-toggle="tab" onclick="handleClick(event)"><i class='fa fa-cash-register'></i> Comercio</a>
                        </li>
                        <li class='nav-item'>
                          <a class='nav-link' href='cultura.html' data-toggle="tab" onclick="handleClick(event)"><i class='fa fa-hat-cowboy'></i> Cultura</a>
                        </li>
                        <li class='nav-item'>
                          <a class='nav-link' href='tecnologia.html' data-toggle="tab" onclick="handleClick(event)"><i class='fa fa-address-card'></i> Tecnologia</a>
                        </li>
                        <li class='nav-item'>
                          <a class='nav-link' href='agropecuaria.html' data-toggle="tab" onclick="handleClick(event)"><i class='fa fa-tractor'></i> Agropecuaria</a>
                        </li>
                        <li class='nav-item'>
                          <a class='nav-link' href='creadores.html' data-toggle="tab" onclick="handleClick(event)"><i class='fa fa-users'></i> Creadores</a>
                        </li>
                      </ul>`;

  document.getElementById('barralateral').innerHTML = barralateral;
}

barralateral();