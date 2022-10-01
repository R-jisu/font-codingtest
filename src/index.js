import home from "./viewer/home_v.js"
import signup from "./viewer/signup_v.js"

const $app = document.querySelector(".app");
const $header = document.querySelector("header");
const $menu_home = document.querySelector('#menu_home');
const $menu_signup = document.querySelector('#menu_signup');

const router = async () => {
	const routes = [
		{ path: "/", view: home},
		{ path: "/web/", view: home },
		{ path: "/web/signup", view: signup},
	];
	
	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
	});
	
	let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

	const view = new match.route.view();
	$app.innerHTML = await view.getHtml();
	//console.log(potentialMatches); 나오는지 확인
	//isMatch가 true인 값을 뽑음 find -> 주어진 함수를 통과하는 첫번째 요소의 값 반환
	//mathc하지 않다면 기본값으로 
	if (!match) {
		match = {
			route: routes[0],
			isMatch: true,
		};
	}
	//없는 페이지는 오류 메세지 404
	if (!match) {
		document.querySelector('.app').innerHTML = `<h1>404 없는 페이지입니다.</h1>`;
		return;
	}
}

//브라우저 주소를 바꾸기 
const navigateTo = (url) => {
	history.pushState({}, null, url);
	console.log(url);
	//pushstate는 렌더링은 해주지 않음. 따라서 view를 호출하기 위한 router호출
	router();
}

const onClick = (event) => {
	if (event.target.id === 'menu_signup') {
		navigateTo("/web/signup");
	}
	else if (event.target.id === 'menu_home') {
		navigateTo("/web/");
	}
}

//DOM 로드가 완료되면 실행되는 이벤트
document.addEventListener('DOMContentLoaded', () => {
	$menu_home.addEventListener('click', onClick);
	$menu_signup.addEventListener('click', onClick);
})

//뒤로가기 누르면 발생하는 이벤트
window.addEventListener('popstate', router);

