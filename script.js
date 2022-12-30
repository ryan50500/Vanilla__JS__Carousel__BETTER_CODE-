const slider = document.querySelector('.slider');
const theButton = document.querySelector('button');
 
// get first carousel item
let boxWidth = document.querySelectorAll('.slider section')[0];
// get width of  carousel item (including margin)
let boxWidthPlusMargin = boxWidth.offsetWidth;
// add margin widths onto offsetwidths
boxWidthPlusMargin += parseInt(window.getComputedStyle(boxWidth).getPropertyValue('margin-left'));
boxWidthPlusMargin += parseInt(window.getComputedStyle(boxWidth).getPropertyValue('margin-right'));
 

setInterval(function(){
   slider.style.transform = `translateX(-${boxWidthPlusMargin}px)`;
}, 2000);
 
// the 'transitionend' event listener is triggered because '.slider' has a transition in the CSS
slider.addEventListener('transitionend', function(){
    // append the first carousel item to the end of the slider
    slider.appendChild(slider.firstElementChild);
    // remove CSS transition from '.slider'
    slider.style.transition = 'none';
    // set slider back to original position
    slider.style.transform = 'translate(0)';
    // setTimeout function solves weird jerking problem
    setTimeout(function(){
       slider.style.transition = 'all 0.5s';
    });
});