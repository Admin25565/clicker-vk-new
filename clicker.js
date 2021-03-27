const click = document.querySelector('.cliker')
const welcome = document.querySelector('.welcome')
const line = document.querySelector('.line')
//X очки
let x2 = document.querySelector('.x2')
let num = document.querySelector('.num')
let x3 = document.querySelector('.x3')
let x4 = document.querySelector('.x4')
let x5 = document.querySelector('.x5')
//выбор обоев!
let body = document.querySelector('.body')
let tap = document.querySelector('.tap')
let backyellow = document.querySelector('.back')
let backyellow2 = document.querySelector('.back2')



//счетчик
let score = 0
let progress = 1


click.addEventListener('click', function(){
	score += progress
	num.textContent = score

});

x2.addEventListener('click', function(){
	if (score >= '100') {
		progress = 2
		score = score - '100'
		num.textContent = score
		x2.parentNode.removeChild(x2);
	}else {
		alert('недостаточно средств! (нужно 100 для улучшения)')
	}
	
});




x3.addEventListener('click', function(){
		if (score >= '150') {
		progress = 3
		score = score - '150'
		num.textContent = score
		x3.parentNode.removeChild(x3);
	}else {
		alert('недостаточно средств! (нужно 150 для улучшения)')
	}
	
});


x4.addEventListener('click', function(){
		if (score >= '300') {
		progress = 4
		score = score - '300'
		num.textContent = score
		x4.parentNode.removeChild(x4);
	}else {
		alert('недостаточно средств! (нужно 300 для улучшения)')
	}
	
});

x5.addEventListener('click', function(){
		if (score >= '600') {
		progress = 5
		score = score - '600'
		num.textContent = score
		x5.parentNode.removeChild(x5);
	}else {
		alert('недостаточно средств! (нужно 600 для улучшения)')
	}
	
});

//выбор обоев
backyellow.addEventListener('click', function(){
	body.classList.add('yellow')
	line.classList.add('color')
	x2.classList.add('color')
	x3.classList.add('color')
	x4.classList.add('color')
	x5.classList.add('color')
	welcome.classList.add('color')
	num.classList.add('color')
	tap.classList.add('color')
	backyellow.classList.add('tab')


});


backyellow2.addEventListener('click', function(){
	body.classList.remove('yellow')
	line.classList.remove('color')
	x2.classList.remove('color')
	x3.classList.remove('color')
	x4.classList.remove('color')
	x5.classList.remove('color')
	welcome.classList.remove('color')
	num.classList.remove('color')
	tap.classList.remove('color')
	backyellow.classList.remove('tab')


});

