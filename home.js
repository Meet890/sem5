let slider = document.querySelector('.slider .list'); //0
let items = document.querySelectorAll('.slider .list .item'); //5
let next = document.getElementById('next'); //0
let prev = document.getElementById('prev'); //0
let dots = document.querySelectorAll('.slider .dots li');//5

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0; //if-else
    reloadSlider(); 
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems; //if-else
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);




function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

