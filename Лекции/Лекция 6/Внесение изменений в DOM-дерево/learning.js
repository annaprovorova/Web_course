/*//Создадим текстовый элемент и заголовок первого уровня в начале страницы
const text = document.createTextNode('Некоторый текст');
const h1 = document.createElement('h1');
document.body.prepend(text);
document.body.prepend(h1);
h1.append('Заголовок страницы')*/

//Копирование абзаца и добавление его после секции с заменой текста
/*const pModified = p.cloneNode(true);
pModified.innerHTML = `<div>new div</div>
                        <i><strong>Новый абзац</strong></i>`
const section = document.getElementsByTagName('section')[0];
section.after(pModified)*/

//Замена всех тегов на странице заголовками второго уровня
const tags = document.body.children

for (let tag of tags) {
	const h2 = document.createElement('h2')
	h2.innerText = 'Останутся только заголовки!'
	tag.replaceWith(h2)
}

//Добавление текста со специальными символами
/*const p = document.querySelector('p');
p.insertAdjacentHTML('beforebegin',
'<a href="https://www.google.com/"><strong>Google</strong></a>');
p.insertAdjacentHTML('afterend',
'<a href="https://yandex.ru/"><strong>Yandex</strong></a>');
*/

let a = 5;
let b = 10;
console.log(`${a} + ${b} = ${a + b}`);
