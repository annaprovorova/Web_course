/*function one() {
	console.log('Нас тут много');
}

function two() {
	console.log('Поверьте!');
}

function three() {
	console.log('Спасибо методу addEventListener');
}

main = document.documentElement;
main.addEventListener('click', one);
main.addEventListener('click', two);
main.addEventListener('click', three);
*/

//обработка события с помощью event
function getCoords(event) {
	console.log(event.type);
	console.log(event.clientX + 'x' + event.clientY)
}

main = document.documentElement;
main.addEventListener('click', getCoords);


let selected;
table = document.querySelector('table')

table.onmouseover = function(event) {
  let target = event.target;
  if (target.tagName === 'TD') {
	highlight(target);
  }
}

function highlight(td) {
  if (selected) {
    selected.classList.remove('colored');
  }
  selected = td;
  selected.classList.add('colored');
}
