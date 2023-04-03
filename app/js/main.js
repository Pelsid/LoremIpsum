/*----------------------------------- 

			Menu

-----------------------------------*/
let burger = document.querySelector("#burger-menu");
let menu = document.querySelector("#menuLinks");

function showMenu() {
	burger.classList.toggle("show")
	menu.classList.toggle("show")
}



/*----------------------------------- 

			Smooth scroll

-----------------------------------*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}




/*----------------------------------- 

			Smooth scroll

-----------------------------------*/

const quantity = document.querySelectorAll('.order__item').length;
const slider = document.querySelector("#slider");

let maxWidth = null;
let left = null;
let shift = null;
let interal = true;
let cliks = 1;

window.addEventListener('resize', function () {
	if (window.innerWidth <= 600) {
		shift = 320;
		interal = true;
		maxWidth = quantity * shift;
		slider.style.width = maxWidth + 'px';
	} else if (window.innerWidth <= 1050) {
		shift = 500;
		interal = true;
		maxWidth = quantity * shift;
		slider.style.width = maxWidth + 'px';
	} else {
		interal = false;
		slider.style.width = 'unset';
		slider.style.transform = 'translateX(' + 0 + 'px' + ')';
	}
});

function sliderLeft(param) {
	if (cliks !== 1) {
		cliks--;
		interal = false;
		left = left + shift;
		slider.style.transform = 'translateX(' + left + 'px' + ')';
	}
}

function sliderRight(param) {
	if (cliks !== quantity) {
		cliks++;
		left = left - shift;
		param == true ? interal = false : interal = true;
		slider.style.transform = 'translateX(' + left + 'px' + ')';
	} else if (cliks === quantity) {
		cliks = 1;
		left = 0;
		slider.style.transform = 'translateX(' + 0 + 'px' + ')';
	}
}

let timerId = setInterval(() => {
	if (interal === true) {
		sliderRight();
	}
}, 3000);



/*----------------------------------- 

			Отображение select

-----------------------------------*/
const select = document.querySelector("#select");
const wrapSelect = document.querySelector("#wrap-select");
const selectSpan = document.querySelector("#select-span");

wrapSelect.onclick = function () {
	select.classList.toggle("_show-select");
	selectSpan.classList.toggle("_span-color");
}