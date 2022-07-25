let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent;

let splittedText = text.split('');
textTag.innerHTML = '';
for(let i = 0; i < splittedText.length; i++){
	if(splittedText[i] == " "){
		splittedText[i] = "&nbsp";
	}

	textTag.innerHTML +=`<span>${splittedText[i]}</span>`;
}
let spans= textTag.querySelectorAll('span');
let k=0;
let interval = setInterval(() => {
	let singleSpan = spans[k]

	singleSpan.className = 'fadeMove';
	k++;

	if(k === spans.length){
		clearInterval(interval);
	}
}, 50);

let border = document.querySelector('.border-line');
let animationWidth = 0;

window.addEventListener("keydown", () => {
	let code = event.keyCode;
	if (code === 107) {
		if (animationWidth < 100) {
			animationWidth += 5;
		} else {
			animationWidth = 100;
		}
	} 
	if (code === 109) {
		if (animationWidth > 0) {
			animationWidth -= 5;
		} else {
			animationWidth = 0;
		}
	}
	border.style.width = animationWidth + '%';
});


let leftBtn = document.querySelector('#firstImageBtn');
let rightBtn = document.querySelector('#secondImageBtn');

let leftImage = document.querySelector('.slideFromLeft');
let rightImage = document.querySelector('.slideFromRight');

leftBtn.addEventListener('click', () => {
	leftImage.classList.add('animated');
})
rightBtn.addEventListener('click', () => {
	rightImage.classList.add('animated');
});