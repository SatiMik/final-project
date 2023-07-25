const input = document.getElementById('vvod');
const button = document.getElementById('dobav');

button.addEventListener('click', addText);
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addText();
    }
});

const translateDiv = document.querySelector(".string")
let count = 1

function addText() {
    count += 1
    let input = document.getElementById('vvod');
    const divWrapper = translateDiv.appendChild(document.createElement('div'))
    divWrapper.classList.add('wrapper');

    const divRu = divWrapper.appendChild(document.createElement('div'))
    divRu.classList.add('ru');

    const spanRu = divRu.appendChild(document.createElement('span'))
    spanRu.classList.add('index');
    spanRu.innerText = count;

    const spanTextRu = divRu.appendChild(document.createElement('span'))
    spanTextRu.classList.add('hello');

    const divEn = divWrapper.appendChild(document.createElement('div'))
    divEn.classList.add('en');

    const spanTextEn = divEn.appendChild(document.createElement('span'))
    spanTextEn.classList.add('hello');

    const imgEn = document.createElement('img')
    imgEn.classList.add('translitClear')
    imgEn.src = "./icons/krest.svg";

    const button = divEn.appendChild(document.createElement('button'))
    button.classList.add('del')
    button.appendChild(imgEn)

    if (input.value.length > 7) {

        spanTextRu.classList.add('overflow');
        spanTextEn.classList.add('overflow');

        spanTextEn.setAttribute('data-title', wordTranslate(input.value));
        spanTextRu.setAttribute('data-title', input.value);
        spanTextRu.innerText = input.value.slice(0, 7) + '...';
        spanTextEn.innerText = wordTranslate(input.value).slice(0, 7) + '...';
    } else {
        spanTextRu.innerText = input.value.slice(0, 7);
        spanTextEn.innerText = wordTranslate(input.value).slice(0, 7);
    }

    const delIndex = Array.from(document.getElementsByClassName('del'));
    delIndex.forEach((elem, index) => {
        elem.addEventListener('click', function () {
            elem.parentElement.parentElement.remove();
            const indexes = Array.from(document.getElementsByClassName("index"));
            indexes.forEach((elem, index) => elem.innerText = index + 1);
        })
    })
}

const clear = document.getElementsByClassName('clear')[0]
clear.addEventListener('click', function () {
    const container = document.getElementsByClassName('container')[0]
    container.innerHTML = `
    <div class="string">
        <div class="wrapper">
            <div class="ru" >
                <span class="index">1</span>
                <span class="hello">Привет</span>
            </div>
            <div class="en" >                       
                <span class="hello">Privet</span>
               <button class="del"><img class="translitClear" src="./icons/krest.svg" alt=""></button> 
            </div>
        </div>
    </div>`
})

function addWord() {
    document.querySelector('string').innerHTML = translate();
}

function wordTranslate(word) {
    var answer = '';
    var converter = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
        'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
        'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
        'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya',

        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
        'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
        'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
        'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
        'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
        'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '`', 'Ы': 'Y', 'Ъ': '',
        'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    };

    for (var i = 0; i < word.length; ++i) {
        if (converter[word[i]] == undefined) {
            answer += word[i];
        } else {
            answer += converter[word[i]];
        }
    }

    return answer;
}
