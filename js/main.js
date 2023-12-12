

const name = prompt("Enter your name please: ");
document.querySelector('#target').innerHTML = `<b>Hello, ${name} !</b>`;

/*document.querySelector('#player-form').addEventListener('submit', function (evt){
	evt.preventDefault();
	const playerName = document.querySelector('#player-input').value;
	document.querySelector('#player-modal').classList.add('hide');
});*/
