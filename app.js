const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const navbar = document.querySelector('.navbar__container')


navToggle.addEventListener('click', () => {
	nav.classList.toggle('nav--visible');
});

window.addEventListener('scroll', function(){
	if(document.documentElement.scrollTop >= 20){
		navbar.classList.add('sticky');
	}
	else {
		navbar.classList.remove('sticky');
	}
})