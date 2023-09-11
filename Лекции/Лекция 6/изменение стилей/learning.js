//Вывод содержимого атрибута «class»
// Получаем элементы с тегом <ul>
const uls = document.querySelectorAll('ul')

// Для каждого элемента получаем имя класса
for (let tag of uls) {
	console.log(tag.className)
}

//Изменение классов
// Получаем элементы с тегом <ul>
//const uls = document.querySelectorAll('ul');
for (let tag of uls) {
	console.log(tag.classList.contains('colored'));
// Удаляем класс colored для первого списка и наоборот добавляем его для второго
    tag.classList.toggle('colored');
    console.log(tag.classList.contains('colored'));
}


//Изменение атрибутов тегов
// Поменяем маркеры на квадраты
document.querySelector('.colored').style.listStyleType = 'square';
// Увеличим шрифт
document.querySelector('.colored').style.fontSize = '2rem';

document.querySelector('.colored').style.color = 'skyblue';

//Сброс стилей
document.querySelector('.colored').style.cssText = `
	list-style-type: "$$$ ";
	list-style-position: inside;
	text-align: center;`


//Получение стилей элементов
console.log(getComputedStyle(document.querySelector('.colored')).display);
console.log(getComputedStyle(document.querySelector('.colored')).marginBottom);
console.log(getComputedStyle(document.querySelector('.colored')).backgroundColor);
