console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form was submitted successfully!")
	// console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById('duck-pic').addEventListener('mouseover', () => {
	alert("You are so charming!")
})