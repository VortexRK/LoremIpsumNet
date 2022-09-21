document.querySelector('.menu').addEventListener('click', toggleMenuLink)
document.querySelector('.select__main-window').addEventListener('click', toggleSelect)
document.querySelector('.select__list').addEventListener('click', selectValue)
document.querySelector('.range__line').addEventListener('input', setRange)
document.querySelector('.mobile-menu').addEventListener('click', toggleMenu)
window.addEventListener('scroll', scrollContent)
window.addEventListener('click', closeAll)

function toggleMenuLink(e) {
	const links = document.querySelectorAll('.menu__link')
	for (el of links) {
		if (el.classList.contains('menu__link_active')) {
			el.classList.remove('menu__link_active')
		}
	}
	e.target.classList.add('menu__link_active')
}

function toggleSelect() {
  const div = document.querySelector('.select__main-window')
	const list = document.querySelector('.select__list')
	div.classList.toggle('select__main-window_recolor')
	list.classList.toggle('select__list_hidden')
}

function selectValue(e) {
	const items = document.querySelectorAll('.select__item')

	for (el of items) {
		if (el.classList.contains('select__item_active')) {
			el.classList.remove('select__item_active')
		}
	}

	e.target.classList.add('select__item_active')
	const value = e.target.innerText
	const div = document.querySelector('.select__main-window')
	div.innerText = value
	toggleSelect()
}

function setRange() {
	const div = document.querySelector('.range__value')
	const range = document.querySelector('.range__line')
	div.innerText = range.value + " %"
}

function closeAll(e) {
	const list = document.querySelector('.select__list')
	const div = document.querySelector('.select__main-window')
	if (!list.classList.contains('select__list_hidden') && !e.target.classList.contains('select__item') && !e.target.classList.contains('select__main-window')) {
		list.classList.add('select__list_hidden')
		div.classList.remove('select__main-window_recolor')
	}
}

function toggleMenu() {
	const menu = document.querySelector('.menu')
	if (menu.style.left === '' || menu.style.left === '-800px') {
		menu.style.left = '0px'
	} else menu.style.left = '-800px'
}

const ordering_header = document.querySelector('.ordering__header')
const work_scheme = document.querySelector('.work-scheme')
const order_form = document.querySelector('.order-form')
const ordering_wrapper = document.querySelector('.ordering__wrapper')
function scrollContent() {
	if (ordering_wrapper.getBoundingClientRect().top + 100 <= window.innerHeight) {
		ordering_header.style.top = '0px'
	}
	if (work_scheme.getBoundingClientRect().top + 100 <= window.innerHeight) {
		work_scheme.style.opacity = '1'
	}
	if (order_form.getBoundingClientRect().top + 100 <= window.innerHeight) {
		order_form.style.transform = 'scale(1)'
	}
}
