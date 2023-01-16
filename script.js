window.addEventListener('DOMContentLoaded', (event) => {
		
	let slideLeftCanRun = true;
	let slideRightCanRun = false;
	const leftButton = document.getElementById('left');
	const rightButton = document.getElementById('right');
	const slider = document.querySelector('.slider');
	const theButton = document.querySelector('button');
	// get first carousel item
	let boxWidth = document.querySelectorAll('.slider section')[0];
	// get width of  carousel item (including margin)
	let boxWidthPlusMargin = boxWidth.offsetWidth;
	// add margin widths onto offsetwidths
	boxWidthPlusMargin += parseInt(window.getComputedStyle(boxWidth).getPropertyValue('margin-left'));
	boxWidthPlusMargin += parseInt(window.getComputedStyle(boxWidth).getPropertyValue('margin-right'));



	// LEFT SLIDER FUNCTION
	// LEFT SLIDER FUNCTION
	 // this runs automatically as 'slideLeftCanRun' is set to true
	const slidingLeft = setInterval(function() {
		slideLeft();
	}, 2000);
	function slideLeft(){
		// runs automatically as 'slideLeftCanRun' is set to true
		if (slideLeftCanRun) {
			slider.style.transform = `translateX(-${boxWidthPlusMargin}px)`;
			console.log('Left is running!');
		}
		else {
			return;
		}
	 }
	// the 'transitionend' event listener is triggered because '.slider' has a transition in the CSS
	slider.addEventListener('transitionend', function() {
		if (slideLeftCanRun) {
			console.log('Left is running!');
			// append the first carousel item to the end of the slider
			slider.appendChild(slider.firstElementChild);
			// remove CSS transition from '.slider'
			slider.style.transition = 'none';
			// set slider back to original position
			slider.style.transform = 'translate(0)';
			// setTimeout function solves weird jerking problem
			setTimeout(function() {
				slider.style.transition = 'all 0.5s';
			});
		}
		else {
			return;
		}
	});
	// LEFT SLIDER FUNCTION
	// LEFT SLIDER FUNCTION
	// LEFT SLIDER FUNCTION



	

	// RIGHT SLIDER FUNCTION
	// RIGHT SLIDER FUNCTION
	// function only triggered when user clicks on Right button
	function slideRight(){
		// 'slideRightCanRun' gets set to true when user clicks on Right button
		if (slideRightCanRun) {
			slider.style.transform = `translateX(${boxWidthPlusMargin}px)`;
			console.log('Right is running!');
		}
		else {
			return;
		}
	 }
	const slidingRight = setInterval(function() {
		slideRight();
	}, 2000);
	// the 'transitionend' event listener is triggered because '.slider' has a transition in the CSS
	slider.addEventListener('transitionend', function() {
		if (slideRightCanRun) {
			console.log('Right is running!');
			// append the first carousel item to the end of the slider
			slider.prepend(slider.lastElementChild);
			// remove CSS transition from '.slider'
			slider.style.transition = 'none';
			// set slider back to original position
			slider.style.transform = 'translate(0)';
			// setTimeout function solves weird jerking problem
			setTimeout(function() {
				slider.style.transition = 'all 0.5s';
			});
		}
		else {
			return;
		}
	});



// when any button is clicked, clear the set interval functions (automatic slider)
// Left button
leftButton.addEventListener('click', function(){
	clearInterval(slidingLeft);
	clearInterval(slidingRight);
	slideRightCanRun = false;
	slideLeftCanRun = true;
	console.log('transitioned ENDED');
	slideLeft();
});


// when any button is clicked, clear the set interval functions (automatic slider)
// Right button
rightButton.addEventListener('click', function(){
	clearInterval(slidingLeft);
	clearInterval(slidingRight);
	slideLeftCanRun = false;
	slideRightCanRun = true;
	console.log('transitioned ENDED');
	slideRight();
});


});