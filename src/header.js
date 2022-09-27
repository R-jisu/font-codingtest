const $menu_home = document.querySelector('#menu_home');
const $menu_signup = document.querySelector('#menu_signup');
let currentLocation = window.location;
let loaction = currentLocation.origin + '/js-company';

function onClick(event) {
	if (event.target.id === 'menu_signup') {
		window.location.assign(loaction+'/signup.html');
	}
	else if (event.target.id === 'menu_home') {
		window.location.assign(loaction+'/home.html');
	}
}

$menu_home.addEventListener('click', onClick);
$menu_signup.addEventListener('click', onClick);
