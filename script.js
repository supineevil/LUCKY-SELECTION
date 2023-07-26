const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
const choosen = document.getElementById('choosenOne');
const selected = document.getElementById('selected');
// focus by default
textarea.focus();

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value);
	const btn1=document.getElementById("start");
	btn1.addEventListener('click',randomSelect);
	const btn2=document.getElementById("restart");
	btn2.addEventListener('click',()=>{
		selected.innerHTML='';
		tagsEl.innerHTML = '';
		e.target.value='';
	})
	// btn.addEventListener('click',()=>{
	// 	if(e.key === 'Enter') {
	// 		// empty textarea
	// 		// used setTimeout to add a little delay in order to clean the input
	// 		setTimeout(() => {
	// 			e.target.value = '';
	// 		}, 10)	
	// 		//start randomizer
			
	// 	}
	// })
	//check if the enter key is pressed
});

function createTags(input) {
	const tags = input.split(' ').filter(tag => tag.trim() !== '').map(tag => tag.trim());
	
	// clean up the tags first
	tagsEl.innerHTML = '';
	
	// map over the tags and add them to the tagsEl container
	tags.forEach(tag => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	})
}

function randomSelect() {
	const times = 30;
	
	const interval = setInterval(() => {
		const randomTag = pickRandomTag();
		highlightTag(randomTag);
		// remove the highlight after a while
		setTimeout(() => {
			unhighlightTag(randomTag);
		}, 100);
	}, 100);
	
	// allow times * 100 ms for the tags to randomly "highlight" themselves
	// then pick another tag
	setTimeout(() => {
		clearInterval(interval);
		setTimeout(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);
			selected.innerHTML='';
	const temp=document.getElementsByClassName('highlight');
	selected.append(temp[0].innerHTML);
		}, 100);
	}, times * 100);
	
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
}


function highlightTag(tag) {
	tag.classList.add('highlight');
	
}

function unhighlightTag(tag) {
	tag.classList.remove('highlight');
}
