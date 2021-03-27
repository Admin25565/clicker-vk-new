const click = document.querySelector('.cliker')
const welcome = document.querySelector('.welcome')
const version = document.querySelector('.version')
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
let score = 0.0
let progress = 0.1


click.addEventListener('click', function(){
    score += progress
    num.textContent = score

});

x2.addEventListener('click', function(){
    if (score >= '20.0') {
        progress = 0.30
        score = score - '20.0'
        num.textContent = score
        x2.parentNode.removeChild(x2);
    }else {
        alert('недостаточно средств! (нужно 20.0 для улучшения)')
    }
    
});




x3.addEventListener('click', function(){
        if (score >= '50.0') {
        progress = 0.55
        score = score - '50.0'
        num.textContent = score
        x3.parentNode.removeChild(x3);
    }else {
        alert('недостаточно средств! (нужно 50.0 для улучшения)')
    }
    
});


x4.addEventListener('click', function(){
        if (score >= '80.0') {
        progress = 0.80
        score = score - '80.0'
        num.textContent = score
        x4.parentNode.removeChild(x4);
    }else {
        alert('недостаточно средств! (нужно 80.0 для улучшения)')
    }
    
});

x5.addEventListener('click', function(){
        if (score >= '150.0') {
        progress = 1.0
        score = score - '150.0'
        num.textContent = score
        x5.parentNode.removeChild(x5);
    }else {
        alert('недостаточно средств! (нужно 150.0 для улучшения)')
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
    version.classList.add('color')
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
    version.classList.remove('color')
    num.classList.remove('color')
    tap.classList.remove('color')
    backyellow.classList.remove('tab')


});
